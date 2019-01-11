import {Palette} from '../components/Palette.js'

const Header = () => (
  <div className="header">
  <p>NOCTURNAL OBEISANCE</p>
  <style jsx>{`
    .header {
      height: 2em;
      margin: 4em 0;
    }

    .header p {
      font-size: 7em;
      color: ${Palette.primary};
      padding-left: 1em;
      z-index: -1;
    }
    `}
  </style>
  </div>
)

export default Header
