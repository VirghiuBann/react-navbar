const Links = ({ id, url, text }) => {
  return (
    <li>
      <a href={url}>{text}</a>
    </li>
  )
}

export default Links
