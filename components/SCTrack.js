const SCTrack = (props) => (
  <div>
  <iframe
    width="40%"
    height="166"
    scrolling="no"
    frameBorder="no"
    allow="autoplay"
    src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${props.track}&color=%233286aa&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
  ></iframe>
  <style jsx>{`
    iframe {
      width: 100%;
      max-width: 40em;
      min-width: 20em;
    }
    `}
  </style>
  </div>
)

export default SCTrack
