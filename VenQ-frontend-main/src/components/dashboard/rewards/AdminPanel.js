import RootFrame from "./RootFrame";
import styles from "./AdminPanel.module.css";

const AdminPanel = () => {
  return (
    <div className={styles.adminPanel}>
      <div className={styles.depth3Frame0}>
        <div className={styles.depth4Frame0}>
          <div className={styles.depth5Frame0}>
            <div className={styles.depth6Frame1}>
              <div className={styles.depth7Frame0}>
                <div className={styles.depth8Frame0}>
                  <div className={styles.depth9Frame0}>
                    <img
                      className={styles.bHKinAspenFrame}
                      loading="eager"
                      alt=""
                      src="/vector--0.svg"
                    />
                    <div className={styles.depth10Frame0} />
                  </div>
                </div>
                <div className={styles.depth8Frame1}>
                  <div className={styles.depth9Frame01}>
                    <div className={styles.overview}>Overview</div>
                  </div>
                </div>
              </div>
              <div className={styles.depth7Frame1}>
                <div className={styles.depth8Frame01}>
                  <div className={styles.depth9Frame02}>
                    <img
                      className={styles.vector0}
                      alt=""
                      src="/vector--0-1.svg"
                    />
                    <div className={styles.depth10Frame01} />
                  </div>
                </div>
                <div className={styles.depth8Frame11}>
                  <div className={styles.depth9Frame03}>
                    <div className={styles.listings}>Listings</div>
                  </div>
                </div>
              </div>
              <div className={styles.depth7Frame2}>
                <div className={styles.depth8Frame02}>
                  <div className={styles.depth9Frame04}>
                    <img
                      className={styles.vector01}
                      alt=""
                      src="/vector--0-2.svg"
                    />
                    <div className={styles.depth10Frame02} />
                  </div>
                </div>
                <div className={styles.depth8Frame12}>
                  <div className={styles.depth9Frame05}>
                    <div className={styles.investors}>Investors</div>
                  </div>
                </div>
              </div>
              <div className={styles.depth7Frame3}>
                <div className={styles.depth8Frame03}>
                  <div className={styles.depth9Frame06}>
                    <img
                      className={styles.vector02}
                      alt=""
                      src="/vector--0-3.svg"
                    />
                    <div className={styles.depth10Frame03} />
                  </div>
                </div>
                <input
                  className={styles.depth8Frame13}
                  placeholder="Management"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className={styles.depth5Frame1}>
            <button className={styles.depth6Frame0}>
              <div className={styles.depth7Frame01}>
                <div className={styles.depth8Frame04}>
                  <b className={styles.new}>New</b>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <main className={styles.rootFrameWrapper}>
        <RootFrame />
      </main>
   </div>
  );
}

export default AdminPanel;
