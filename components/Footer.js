const socials = []

const Footer = () => (
  <div className="footer">

    <ul>
    {socials.map((s, i) => (
      <li key={i.toString()}>
        <a href={s.url} target="_blank">{s.title}</a>
      </li>
    ))}
    </ul>

    <a href="mailto:dragstor@posev.su">dragstor@posev.su</a>
  <style jsx>{`
    .footer {
      padding-top: 2em;
      padding-bottom: 2em;
      margin-bottom: 2em;
    }

    li {
      display: inline-block;
      padding-left: 1em;
      padding-right: 1em;
    }

    ul {
      margin-bottom: 0.7em;
    }
  `}
  </style>
  </div>
)

export default Footer
