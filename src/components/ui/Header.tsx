import styles from './header.module.css'

export interface Props {
  query: string
  setQuery: (query: string) => void
}

export const Header: React.FC<Props> = ({ setQuery }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }
  
  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search a Pokemon... Charizard"
          onChange={(evt) => {
            setQuery(evt.target.value.toLowerCase())
          }}
        />
      </form>
    </header>
  )
}
