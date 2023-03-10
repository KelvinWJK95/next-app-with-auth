
import CommentDisplay from './common/CommentDisplay'


export default function CommentBoard(){
    return (
        <div><div className="Commentboard-container">
        <h2>What people say</h2>
        <span style={{fontSize:"14px"}}>They gave and they said.</span>
        <div style={{padding:"0.3rem"}}/>
        <CommentDisplay user="Anonymous" amount="$50" when="25 min" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel auctor ligula. Proin dictum pulvinar neque ultricies iaculis. Suspendisse accumsan, leo ac finibus interdum, neque ligula scelerisque augue, quis ornare ante lectus ac ipsum."/>
        <CommentDisplay user="Anonymous" amount="$100" when="40 min" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel auctor ligula."/>
        <CommentDisplay user="Anonymous" amount="$1,000" when="1 hr" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel auctor ligula. Proin dictum pulvinar neque ultricies iaculis. Suspendisse accumsan, leo ac finibus interdum, neque ligula scelerisque augue, quis ornare ante lectus ac ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean convallis congue nisi eu vulputate. Vestibulum feugiat sollicitudin sapien, quis accumsan lacus fermentum non. Suspendisse potenti. Cras dignissim varius tortor, nec fringilla nisl vehicula et."/>
        <CommentDisplay user="Anonymous" amount="$75" when="5 day" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        <CommentDisplay user="Anonymous" amount="$250" when="1 week" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel auctor ligula. Proin dictum pulvinar neque ultricies iaculis. Suspendisse accumsan, leo ac finibus interdum, neque ligula scelerisque augue, quis ornare ante lectus ac ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus."/>
        </div></div>
    )

}