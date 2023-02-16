import styles from './page.module.css'
import ActionBar from '../../../components/ActionBar'
import CommentBoard from '../../../components/CommentBoard'
import ImageDisplay from '../../../components/common/ImageDisplay'


export default function Page() {
  return (
    <div className={styles.organizationContainerWrapper}><div className={styles.organizationContainer}>
      <div className={styles.organizationHeader}>
          <h1 className={styles.organizationTitle}>Methodist Church</h1>
      </div>

      <div className={styles.organizationPic}>
          <ImageDisplay/>
      </div>
      
      <div className={styles.organizationDesc}>
          <h2>What they do</h2>
          <div style={{padding:"0.6rem"}}/>
          <p className="Wrap-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel auctor ligula. Proin dictum pulvinar neque ultricies iaculis. Suspendisse accumsan, leo ac finibus interdum, neque ligula scelerisque augue, quis ornare ante lectus ac ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean convallis congue nisi eu vulputate. Vestibulum feugiat sollicitudin sapien, quis accumsan lacus fermentum non. Suspendisse potenti. Cras dignissim varius tortor, nec fringilla nisl vehicula et. Morbi sit amet erat in lectus elementum mollis in sit amet turpis. Sed quis turpis mi. Praesent euismod, urna nec vulputate volutpat, dolor magna consequat libero, quis rhoncus nibh lectus gravida massa. Etiam ac convallis neque, sed euismod magna. Nulla quis blandit lacus, sit amet euismod neque. Ut lacus tortor, placerat a bibendum at, ultricies ac massa. Etiam eget bibendum odio. Integer finibus, lorem sit amet laoreet tempor, erat risus sodales tortor, luctus rhoncus quam ipsum id velit.</p>

      </div>
      <div className={styles.organizationSidebar}>
          <ActionBar/>
      </div>
      
      <div className={styles.organizationComment}>
          <CommentBoard/>
      </div>
    </div></div>
  )
}
