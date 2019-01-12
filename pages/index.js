import {Palette} from '../components/Palette.js'
import Background from '../components/Background'
import Main from '../layouts/Main'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SCTrack from '../components/SCTrack'

import LazyLoad from 'react-lazyload';
import dayjs from 'dayjs'

const Index = (props) => (
  <div>
  <Background />
  <Main>
  <Header />
  <div className="container">
  {props.items.map((item) => (
    <LazyLoad height={600} key={item.sctrack}>
    <div className="item">
    <video loop autoPlay muted playsInline>
    <source src={item.image} type="video/mp4" />
    </video>
    <SCTrack track={item.sctrack} />
    </div>
    </LazyLoad>
  ))}
  </div>
  <Footer />
  </Main>
  <style jsx>{`
      .container {
        width: 100%;
      }

      .container .item:nth-child(even) {
        background-color: ${Palette.warning};
      }

      .container .item:nth-child(even):hover {
        background-color: ${Palette.light};
      }

      .container .item:nth-child(odd) {
        background-color: ${Palette.light};
      }

      .container .item:nth-child(odd):hover {
        background-color: ${Palette.warning};
      }

      .container .item {
        max-width: 40em;
        margin: auto;
        margin-bottom: 4em;
        padding: 2em;
        position: relative;
        transition: background-color 200ms linear;
      }

      .container .item video {
        width: 100%;
        margin-bottom: -0.3em;
      }

      .container .item iframe {
        width: 100%;
      }
    `}</style>
  </div>
)

Index.getInitialProps = () => ({
  items: [
    {
      "image": "https://media.giphy.com/media/X9tOww6RE0NJaFielA/giphy.mp4",
      "sctrack": "300053138",
      "published_at": "2019-01-16T16:00:00.000Z"
    },
    {
      "image": "https://media.giphy.com/media/9JrvJ16SEz3brFhzNN/giphy.mp4",
      "sctrack": "135179524",
      "published_at": "2019-01-15T16:00:00.000Z"
    },
    {
      "image": "https://media.giphy.com/media/Ep2CkN3erKjSYmYt61/giphy.mp4",
      "sctrack": "422768892",
      "published_at": "2019-01-14T16:00:00.000Z"
    },
    {
      "image": "https://media.giphy.com/media/1dc2MhJNVoIo0gj0Dy/giphy.mp4",
      "sctrack": "477630402",
      "published_at": "2019-01-13T16:00:00.000Z"
    },
    {
      "image": "https://media.giphy.com/media/8OMbi7uFLuFY5gvcOT/giphy.mp4",
      "sctrack": "297905332",
      "published_at": "2019-01-12T16:00:00.000Z"
    },
    {
      "image": "https://media.giphy.com/media/28jTYGkICEG790UKYE/giphy.mp4",
      "sctrack": "329505333",
      "published_at": "2019-01-11T16:00:00.000Z"
    },
    {
      "image": "https://media.giphy.com/media/51YdXns3IIzXbbQ7rw/giphy.mp4",
      "sctrack": "527791200",
      "published_at": "2019-01-10T16:00:00.000Z"
    },
    {
      "image": "https://media.giphy.com/media/259aepyVE9wqtKIOR6/giphy.mp4",
      "sctrack": "549103632",
      "published_at": "2019-01-10T16:00:00.000Z"
    },
  ].filter((item) => dayjs(item.published_at).isBefore(dayjs()))
})

export default Index
