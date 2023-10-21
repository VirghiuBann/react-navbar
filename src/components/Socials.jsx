const Socials = ({ social }) => {
  return social.map(({ id, url, icon }) => (
    <li key={id}>
      <a href={url}>{icon}</a>
    </li>
  ))
}

export default Socials
