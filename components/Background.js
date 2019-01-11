const bgUrl = "/static/bg.mp4"

const Background = () => (
  <div>
    <video loop autoPlay>
        <source src={bgUrl} type="video/mp4" />
    </video>
    <style jsx>{`
      video {
        width: 100%;
        float: left;
        top: 0;
        left: 0;
        position: fixed;
        z-index: -9000;
      }
      `}</style>
  </div>
)

export default Background
