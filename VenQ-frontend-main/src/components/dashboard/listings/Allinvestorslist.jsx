import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import config from "../../../config";
import CustomModal from './Modal';


const Allinvestorslist = () => {
  const [investments, setInvestments] = useState([]);
  const [displayType, setDisplayType] = useState("completed");
  const [purchased, setPurchased] = useState([]);
  const [checkboxes, setCheckboxes] = useState({});
  const [esignUrl, setEsignUrl] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [clientId, setClientId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pdfLink, setPdfLink] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const URL = config.URL;

  useEffect(() => {
    // Fetch all investments
    axios
      .get(`${URL}/investment`)
      .then((response) => {
        setInvestments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching investments:", error);
      });

    // Fetch purchased investments with initial checkbox states
    axios
      .get(`${URL}/purchased/all/`)
      .then((response) => {
        const purchasedData = response.data;
        setPurchased(purchasedData);

        // Initialize checkbox state based on the purchased data
        const initialCheckboxes = {};
        purchasedData.forEach((investor) => {
          initialCheckboxes[investor._id] = {
            esign1: investor.surepassStatus === "Completed",
            esign2: investor.surepassProsStatus === "Completed",
          };
        });
        setCheckboxes(initialCheckboxes);
      })
      .catch((error) => {
        console.error("Error fetching purchased data:", error);
      });
  }, [URL]);

  const handleDisplayTypeChange = (type) => {
    setDisplayType(type);
  };

  const handleCheckboxChange = (id, esignType) => {
    const currentStatus = checkboxes[id]?.[esignType];
    const newStatus = !currentStatus;

    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: {
        ...prevCheckboxes[id],
        [esignType]: newStatus,
      },
    }));

    updateCheckboxStatus(id, esignType, newStatus);
  };

  const updateCheckboxStatus = (id, esignType, newStatus) => {
    const statusField = esignType === "esign1" ? "surepassStatus" : "surepassProsStatus";
    const updatedStatus = newStatus ? "Completed" : "Not Completed";

    axios
      .put(`${URL}/purchased/update-status`, { id, statusType: statusField, status: updatedStatus })
      .then((response) => {
        console.log("Purchase status updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating purchase status:", error);
      });
  };
  const handleGetLink = async (name, email, phone) => {
    setLoading(true);
    setError(null); // Reset errors on new request

    const trimmedPhone = phone.startsWith("91") ? phone.slice(2) : phone;
    const url = `${URL}/surepass/initializeEsign`;

    const payload = {
      name: name,
      email: email,
      phone: trimmedPhone,
    };

    try {
      const response = await axios.post(url, payload);

      if (response.data && response.data.data && response.data.data.data.url && response.data.data.data.client_id) {
        const clientId = response.data.data.data.client_id;
        const esignUrl = response.data.data.data.url;

        setClientId(clientId);
        setEsignUrl(esignUrl);
        console.log("eSign URL:", esignUrl);
        setIsModalOpen(true); // Open the modal with the URL

        localStorage.setItem("client_id", clientId);

        const fatherDetails = {
          clientId1: clientId,
          phoneNumber: trimmedPhone,
          pdfUrl: "default_pdf_link", // Change this if necessary
          email: email,
        };

        const url2 = `${URL}/esigndetails/surepassDetails`;
        await axios.post(url2, fatherDetails);

        const newPayload = {
          client_id: clientId,
          link: "https://res.cloudinary.com/duamtsgqf/raw/upload/v1729697301/pdfs/ck8henhu38qsqooaes8e.pdf",
        };

        const newUrl = `${URL}/surepass/uploadPdf`;
        const secondResponse = await axios.post(newUrl, newPayload);
        console.log("Response from the second API:", secondResponse.data);
      } else {
        throw new Error("URL or client_id not found in the response.");
      }
    } catch (error) {
      setError("Error occurred while calling initializeEsign: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleGetLinkPROS = async (name, email, phone) => {
    setLoading(true);
    setError(null); // Reset errors on new request

    const trimmedPhone = phone.startsWith("91") ? phone.slice(2) : phone;
    const url = `${URL}/surepass/initializeEsignPROS`;

    const payload = {
      name: name,
      email: email,
      phone: trimmedPhone,
    };

    try {
      // Fetch the PDF link based on email
      const customerResponse = await axios.get(`${URL}/customers/byEmail`, {
        params: { email },
      });

      const pdfLink = customerResponse.data.pdfLink || "default_pdf_link";
      setPdfLink(pdfLink); // Save pdfLink in state

      const response = await axios.post(url, payload);

      if (response.data && response.data.data && response.data.data.data.url && response.data.data.data.client_id) {
        const clientId = response.data.data.data.client_id;
        const esignUrl = response.data.data.data.url;

        setClientId(clientId);
        setEsignUrl(esignUrl);
        console.log("eSign URL:", esignUrl);
        setIsModalOpen(true); // Open the modal
        localStorage.setItem("client_id", clientId);

        const fatherDetails = {
          clientId1: clientId,
          phoneNumber: trimmedPhone,
          pdfUrl: pdfLink,
          email: email,
        };

        const url2 = `${URL}/esigndetails/surepassDetails`;
        await axios.post(url2, fatherDetails);

        const newPayload = {
          client_id: clientId,
          link: pdfLink,
        };

        const newUrl = `${URL}/surepass/uploadPdf`;
        const secondResponse = await axios.post(newUrl, newPayload);
        console.log("Response from the second API:", secondResponse.data);
      } else {
        throw new Error("URL or client_id not found in the response.");
      }
    } catch (error) {
      setError("Error occurred while calling initializeEsign: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderCompletedRows = () => {
    return (
      <TableBody>
        {purchased.map((investor) => (
          <TableRow key={investor._id}>
            <TableCell style={{textAlign:"center"}}>{investor.customerId.name}</TableCell>
            <TableCell style={{textAlign:"center"}}>{investor.customerId.phone}</TableCell>
            <TableCell style={{textAlign:"center"}}>{investor.customerId.email}</TableCell>
            <TableCell style={{textAlign:"center"}}>
              <input
                type="checkbox"
                checked={checkboxes[investor._id]?.esign1 || false}
                onChange={() => handleCheckboxChange(investor._id, "esign1")}
              />
              
              
            </TableCell>
            <TableCell style={{textAlign:"center"}}>
            <Button style={{alignContent:"center"}} onClick={() => handleGetLink(investor.customerId.name, investor.customerId.email, investor.customerId.phone)}>
                Get eSign1 Link
                
              </Button>
              </TableCell>
              
            <TableCell style={{textAlign:"center"}}>
              <input
                type="checkbox"
                checked={checkboxes[investor._id]?.esign2 || false}
                onChange={() => handleCheckboxChange(investor._id, "esign2")}
              />
            </TableCell>
            <TableCell style={{textAlign:"center"}}><Button onClick={()=> handleGetLinkPROS(investor.customerId.name, investor.customerId.email, investor.customerId.phone)} >Get Esign2 Link</Button></TableCell>

            <TableCell style={{textAlign:"center"}}>{investor.amount}</TableCell>
          </TableRow>
        ))}
        <CustomModal 
            open={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            esignUrl={esignUrl} 
        />
      </TableBody>
    );
  };

  const renderInterestedRows = () => {
    return (
      <TableBody>
        {investments
          .filter((investor) => !investor.isCompleted)
          .map((investor) => (
            <TableRow key={investor._id}>
              <TableCell>{investor.name}</TableCell>
              <TableCell>{investor.phone}</TableCell>
              <TableCell>{investor.email}</TableCell>
              <TableCell>
                <input
                  type="checkbox"
                  checked={checkboxes[investor._id]?.esign1 || false}
                  onChange={() => handleCheckboxChange(investor._id, "esign1")}
                />
              </TableCell>

              <TableCell>
                <input
                  type="checkbox"
                  checked={checkboxes[investor._id]?.esign2 || false}
                  onChange={() => handleCheckboxChange(investor._id, "esign2")}
                />
              </TableCell>
              <TableCell>{investor.amount}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    );
  };

  return (
    <div style={{ maxWidth: "100%", overflowX: "auto" }}>
      <h1 style={{ textAlign: "center", fontFamily: "Gilroy-Bold" }}>Investors Data</h1>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <button
          onClick={() => handleDisplayTypeChange("completed")}
          style={{
            marginRight: "10px",
            padding: "8px 16px",
            fontFamily: "Work Sans",
            fontWeight: displayType === "completed" ? "bold" : "normal",
          }}
        >
          Completed Investors
        </button>
        <button
          onClick={() => handleDisplayTypeChange("interested")}
          style={{
            padding: "8px 16px",
            fontFamily: "Work Sans",
            fontWeight: displayType === "interested" ? "bold" : "normal",
          }}
        >
          Interested Investors
        </button>
      </div>
      <Table style={{ fontFamily: "Work Sans", minWidth: 300, textAlign:"center",width:"100%" }}>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold", textAlign:"center" }}>Name</TableCell>
            <TableCell style={{ fontWeight: "bold", textAlign:"center" }}>Contact</TableCell>
            <TableCell style={{ fontWeight: "bold", textAlign:"center" }}>Email</TableCell>
            <TableCell style={{ fontWeight: "bold", textAlign:"center" }}>Esign 1</TableCell>
            <TableCell style={{ fontWeight: "bold", textAlign:"center" }}>Get Link</TableCell>

            <TableCell style={{ fontWeight: "bold",textAlign:"center"  }}>Esign 2</TableCell>
            <TableCell style={{ fontWeight: "bold",textAlign:"center"  }}>Get Link</TableCell>
            <TableCell style={{ fontWeight: "bold",textAlign:"center"  }}>Investment Amount</TableCell>
          </TableRow>
        </TableHead>
        {displayType === "completed" ? renderCompletedRows() : renderInterestedRows()}
      </Table>
    </div>
  );
};

export default Allinvestorslist;
