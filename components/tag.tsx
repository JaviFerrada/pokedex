import styles from '../styles/Tag.module.css'

interface TagProps {
  text: string
}

const Tag = ({ text }: TagProps) => {

  return (
    <div className={`${styles.tag} rounded bg-${text}`}>
      <span>{text}</span>
    </div>
  )
}


export default Tag
