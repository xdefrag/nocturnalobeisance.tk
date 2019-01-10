import Main from '../layouts/Main'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SCTrack from '../components/SCTrack'


const Index = (props) => (
  <div>
  <Main>
  <Header />
  {props.items.map((item) => (
    <div className="item">
    <video loop autoPlay>
    <source src={item.image} type="video/mp4" />
    </video>
    <SCTrack track={item.sctrack} />
    </div>
  ))}
  <Footer />
  </Main>
  <style jsx>{`
      .item {
        margin-bottom: 4em;
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
        "sctrack": "505911822"
      },

    ]
  }
}

export default Index
