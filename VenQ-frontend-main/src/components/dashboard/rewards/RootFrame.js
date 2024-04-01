import Depth8Frame from "./Depth8Frame";
import styles from "./RootFrame.module.css";

const RootFrame = () => {
  return (
    <section className={styles.rootFrame}>
      <div className={styles.depth5Frame0Wrapper}>
        <div className={styles.depth5Frame0}>
          <div className={styles.depth6Frame0}>
            <div className={styles.depth7Frame0}>
              <h1 className={styles.propertyManagement}>Property Management</h1>
            </div>
          </div>
          <div className={styles.depth6Frame1}>
            <div className={styles.depth7Frame01}>
              <div className={styles.listOfAll}>
                List of all your properties
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.depth4Frame1Parent}>
        <div className={styles.depth4Frame1}>
          <div className={styles.depth5Frame01}>
            <div className={styles.depth6Frame01}>
              <div className={styles.depth7Frame02}>
                <img
                  className={styles.listIcon}
                  alt=""
                  src="/vector--0-4.svg"
                />
                <div className={styles.depth8Frame0} />
              </div>
            </div>
            <input
              className={styles.depth6Frame11}
              placeholder="Search by city, address or listing ID"
              type="text"
            />
          </div>
        </div>
        <div className={styles.depth4Frame2}>
          <div className={styles.depth5Frame02}>
            <div className={styles.depth6Frame02}>
              <div className={styles.depth7Frame03}>
                <div className={styles.depth8Frame01}>
                  <div className={styles.depth9Frame0}>
                    <div className={styles.depth10Frame0}>
                      <div className={styles.name}>Name</div>
                    </div>
                  </div>
                  <div className={styles.depth9Frame1}>
                    <div className={styles.depth10Frame01}>
                      <div className={styles.tickerCode}>Ticker Code</div>
                    </div>
                  </div>
                  <div className={styles.depth9Frame2}>
                    <div className={styles.depth10Frame02}>
                      <div className={styles.listedDate}>Listed Date</div>
                    </div>
                  </div>
                  <div className={styles.depth9Frame3}>
                    <div className={styles.depth10Frame03}>
                      <div className={styles.listPrice}>List Price</div>
                    </div>
                  </div>
                  <div className={styles.depth9Frame4}>
                    <div className={styles.depth10Frame04}>
                      <div className={styles.status}>Status</div>
                    </div>
                  </div>
                  <div className={styles.depth9Frame5}>
                    <div className={styles.depth10Frame05}>
                      <div className={styles.actions}>Actions</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.depth7Frame1}>
                <Depth8Frame
                  actionsDepthFrame="09/15/2022"
                  propertyManagementList="$1,200,000"
                />
                <Depth8Frame
                  actionsDepthFrame="09/20/2022"
                  propertyManagementList="$1,000,000"
                />
                <Depth8Frame
                  actionsDepthFrame="10/05/2022"
                  propertyManagementList="$1,500,000"
                />
   <Depth8Frame
                  actionsDepthFrame="10/10/2022"
                  propertyManagementList="$800,000"
                />
                <Depth8Frame
                  actionsDepthFrame="10/25/2022"
                  propertyManagementList="$1,100,000"
                />
                <Depth8Frame
                  actionsDepthFrame="11/01/2022"
                  propertyManagementList="$900,000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
</section>
  );
}
export default RootFrame;
