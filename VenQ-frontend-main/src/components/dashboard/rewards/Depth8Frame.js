
import styles from "./Depth8Frame.module.css";

const Depth8Frame = ({ actionsDepthFrame, propertyManagementList }) => {
  return (
    <div className={styles.depth8Frame0}>
      <div className={styles.depth9Frame0}>
        <div className={styles.depth10Frame0}>
          <div className={styles.bhkInAspen}>3BHK in Aspen</div>
        </div>
      </div>
      <div className={styles.depth9Frame1}>
        <div className={styles.depth10Frame01}>
          <div className={styles.aspn1}>ASPN1</div>
        </div>
      </div>
      <div className={styles.depth9Frame2}>
        <div className={styles.depth10Frame02}>
          <div className={styles.actionsDepthFrame}>{actionsDepthFrame}</div>
        </div>
      </div>
      <div className={styles.depth9Frame3}>
        <div className={styles.depth10Frame03}>
          <div className={styles.propertyManagementList}>
            {propertyManagementList}
          </div>
        </div>
      </div>
      <div className={styles.depth9Frame4}>
        <button className={styles.depth10Frame04}>
          <div className={styles.depth11Frame0}>
            <div className={styles.depth12Frame0}>
              <div className={styles.active}>Active</div>
            </div>
          </div>
        </button>
      </div>
      <div className={styles.depth9Frame5}>
        <div className={styles.depth10Frame05}>
          <b className={styles.viewDetails}>View details</b>
        </div>
      </div>
    </div>
  );
}
export default Depth8Frame;