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

      // high res
      @media all and (min-width: 1300px) {
        .container .item {
          max-width: 60vw;
        }
      }

      // low res
      @media all and (max-width: 800px) {
        .container .item {
          padding: 0;
        }

        .container .item video {
          margin-bottom: 0;
        }

      }
    `}</style>
  </div>
)

Index.getInitialProps = () => ({
  items: [
    {
      "image": "https://media.giphy.com/media/3h3x0dHjWZB6SwGES6/giphy.mp4",
      "sctrack": "522121725",
      "published_at": "2019-01-06T16:00:00.000Z"
    },
    {
      "image": "https://media.giphy.com/media/kVNV1wSjDfxwQqxdLw/giphy.mp4",
      "sctrack": "314293579",
      "published_at": "2019-01-02T16:00:00.000Z"
    },
    {
      "image": "https://media.giphy.com/media/4GZwuLco5K9Mo6qa4Y/giphy.mp4",
      "sctrack": "495966147",
      "published_at": "2019-01-04T16:00:00.000Z"
    },
    {
      "image": "https://media.giphy.com/media/5w2dmjZM2w6WX0C7xn/giphy.mp4",
      "sctrack": "322312116",
      "published_at": "2019-01-02T16:00:00.000Z"
    },
    {
      "image": "https://media.giphy.com/media/5yYDJmaA70ViiiIrvC/giphy.mp4",
      "sctrack": "440562744",
      "published_at": "2019-01-30T16:00:00.000Z"
    },
    {
      "image": "https://media.giphy.com/media/Bo7EKPeX7l1IUTrbU8/giphy.mp4",
      "sctrack": "450693687",
      "published_at": "2019-01-28T16:00:00.000Z"
    },
    {
      "image": "https://media.giphy.com/media/9P1Gwqd14thUh3oTmj/giphy.mp4",
      "sctrack": "558540270",
      "published_at": "2019-01-26T16:00:00.000Z"
    },
    {
      "image": "https://media.giphy.com/media/2wW4VXvfxc2kSovWns/giphy.mp4",
      "sctrack": "374656514",
      "published_at": "2019-01-24T16:00:00.000Z"
    },
    {
      "image": "https://media.giphy.com/media/fCU0sfogI94gpueWsS/giphy.mp4",
      "sctrack": "435176886",
      "published_at": "2019-01-22T16:00:00.000Z"
    },
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
