import Main from '../layouts/Main'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SCTrack from '../components/SCTrack'


const Index = (props) => (
  <div>
  <Main>
  <Header />
  <div className="container">
  {props.items.map((item) => (
    <div className="item">
    <video loop autoPlay>
      <source src={item.image} type="video/mp4" />
    </video>
    <SCTrack track={item.sctrack} />
    </div>
  ))}
  </div>
  <Footer />
  </Main>
  <style jsx>{`
      .container {
        width: 100%;
      }

      .container .item {
        max-width: 40em;
        margin: auto;
        margin-bottom: 4em;
      }

      .container .item video {
        width: 100%;
      }

      .container .item iframe {
        width: 100%;
      }
    `}</style>
  </div>
)

Index.getInitialProps = () => {
  return {
    items: [
      {
        "image": "https://media.giphy.com/media/51YdXns3IIzXbbQ7rw/giphy.mp4",
        "sctrack": "527791200"
      },
      {
        "image": "https://media.giphy.com/media/259aepyVE9wqtKIOR6/giphy.mp4",
        "sctrack": "549103632"
      },

    ]
  }
}

export default Index
