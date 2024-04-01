{/* <Grid>
        <Paper elevation={20} className="paper-login">
          <Grid align="Center">
            <Avatar sx={{ bgcolor: "#1bbd7e" }}>
              <LoginIcon />
            </Avatar>
            <h2>Add a new listing</h2>
          </Grid>
          <form onSubmit={handleLogin}>
            <Stack spacing={2} direction="column">
            <TextField
                label="Specs"
                placeholder="Enter specs"
                type="text"
                value={specs}
                onChange={(e) => setSpecs(e.target.value)}
                fullWidth
                required
              />
            <TextField
                label="Propery Heading"
                placeholder="Enter heading of the property"
                type="text"
                value={propertyheading}
                onChange={(e) => setPropertyHeading(e.target.value)}
                fullWidth
                required
              />
                 <TextField
                label="Propery Description"
                id="outlined-multiline-static"
                placeholder="Enter description of the property"
                type="text"
                value={propertydescription}
     
                onChange={(e) => setPropertyDescription(e.target.value)}
                fullWidth
                multiline
                maxRows={5}
                required
              />
              <TextField
                label="Property Logo Link"
                placeholder="Enter Property Logo Link of the property"
                type="text"
                value={propertylogolink}
               
                onChange={(e) => setPropertyLogoLink(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Property Price"
                placeholder="Enter price of the property"
                type="text"
                value={propertyprice}
               
                onChange={(e) => setPropertyPrice(e.target.value)}
                fullWidth
                required
              />
               <TextField
                label="Transaction cost"
                placeholder="Enter the transaction cost"
                type="text"
                value={transactioncost}
               
                onChange={(e) => setTransactionCost(e.target.value)}
                fullWidth
                required
              />
               <TextField
                label="Inv cost"
                placeholder="Enter the inv cost"
                type="text"
                value={invcost}
               
                onChange={(e) => setInvCost(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="VENQ fee"
                placeholder="Enter VENQ fee"
                type="text"
                value={venqfee}
               
                onChange={(e) => setVenqFee(e.target.value)}
                fullWidth
                required
              />
               <TextField
                label="Maintainence fee"
                placeholder="Enter Maintainence fee"
                type="text"
                value={maintainencefee}
               
                onChange={(e) => setMaintainenceFee(e.target.value)}
                fullWidth
                required
              />
               <TextField
                label="Projected Gross Rent"
                placeholder="Enter Projected Gross Rent"
                type="text"
                value={projectedgrossrent}
               
                onChange={(e) => setProjectedGrossRent(e.target.value)}
                fullWidth
                required
              />
               <TextField
                label="Service Charges"
                placeholder="Enter Service Charges"
                type="text"
                value={servicecharges}
               
                onChange={(e) => setServiceCharges(e.target.value)}
                fullWidth
                required
              />
               <TextField
                label="Annual Net Income"
                placeholder="Enter Annual Net Income"
                type="text"
                value={annualnetincome}
               
                onChange={(e) => setAnnualNetIncome(e.target.value)}
                fullWidth
                required
              />
               <TextField
                label="Main heading"
                placeholder="Enter Main heading"
                type="text"
                value={mainheading}
               
                onChange={(e) => setMainHeading(e.target.value)}
                fullWidth
                required
              />
              <div className="border-0 mt-4 px-3 py-3 rounded text-sm shadow w-full bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400">
                            <div className="border-0 px-2 sm:px-3 py-1 rounded w-full sm:w-2/3 lg:w-1/2 text-xl sm:text-2xl lg:text-3xl">
                              Photos
                            </div>
                            <PhotoUploader addedPhotos={photos} onChange={setPhotos} />
                          </div>
               <TextField
                label="Box Headings"
                placeholder="Enter Box Headings"
                type="text"
                value={boxheadings}
               
                onChange={(e) => setBoxHeadings(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Sub Heading"
                placeholder="Enter Sub Heading"
                type="text"
                value={subheading}
               
                onChange={(e) => setSubHeading(e.target.value)}
                fullWidth
                required
              />
               <TextField
                label="Price"
                placeholder="Enter Price"
                type="text"
                value={price}
               
                onChange={(e) => setPrice(e.target.value)}
                fullWidth
                required
              />
               <TextField
                label="Fund"
                placeholder="Enter Fund"
                type="text"
                value={fund}
               
                onChange={(e) => setFund(e.target.value)}
                fullWidth
                required
              />
               <TextField
                label="Annualized Return"
                placeholder="Enter Annualized Return"
                type="text"
                value={annualizedreturn}
               
                onChange={(e) => setAnnualizedReturn(e.target.value)}
                fullWidth
                required
              />
               <TextField
                label="Annual Appreciation"
                placeholder="Enter Annual Appreciation"
                type="text"
                value={annualappreciation}
               
                onChange={(e) => setAnnualAppreciation(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Gross Yield"
                placeholder="Enter Gross Yield"
                type="text"
                value={grossyield}
               
                onChange={(e) => setGrossYield(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Net Yield"
                placeholder="Enter Net Yield"
                type="text"
                value={netyield}
               
                onChange={(e) => setNetYield(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Amenity Name"
                placeholder="Enter Amenity Name"
                type="text"
                value={amenityname}
               
                onChange={(e) => setAmenityName(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Amenity Link"
                placeholder="Enter Amenity Link"
                type="text"
                value={amenitylink}
               
                onChange={(e) => setAmenityLink(e.target.value)}
                fullWidth
                required
              />
               <TextField
                label="Document Name"
                placeholder="Enter Document Name"
                type="text"
                value={documentName}
               
                onChange={(e) => setDocumentName(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Document Link"
                placeholder="Enter Document Link"
                type="text"
                value={documentlink}
               
                onChange={(e) => setDocumentLink(e.target.value)}
                fullWidth
                required
              />
             

              {/* <TextField
                label="Password"
                placeholder="Enter Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
              /> */}
            {/* </Stack>
            <br /><br />
            <Button
              type="submit"
              variant="contained"
              style={btnstyle}
              color="primary"
              fullWidth
              onClick={handleLogin}
            >
              Add Listing
            </Button>
          </form>
          {formValid && (
        <Stack sx={{ width: "100%", paddingTop: "10px", marginTop:"10px" }} spacing={2}>
          <Alert severity="error" size="small" margin>
            {formValid}
          </Alert>
        </Stack>
      )}

      {/* Show Success if no issues */}
      {/* {success && (
        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
          <Alert severity="success" size="small">
            {success}
          </Alert>
        </Stack>
      )}
        </Paper> */}
      {/* </Grid> */} 