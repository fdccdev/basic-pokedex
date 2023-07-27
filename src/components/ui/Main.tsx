import { Link } from 'react-router-dom'
import styles from './main.module.css'
import { Props } from '../../types/types'

export const Main: React.FC<Props> = ({ pokemons, query }) => {  

  const filterPkmn = pokemons?.filter((pokemon) => {
    return query.toLowerCase() === '' ? pokemon : pokemon.name.toLowerCase().includes(query)
  })

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        {filterPkmn.map((pokemon) => (
            <Link
              key={pokemon.name}
              className={styles.listItem}
              to={`/detail/${pokemon.id}`}
            >
              <img className={styles.imgPkmn} src={pokemon.img} alt={pokemon.name} />
              <div className={styles.divInfo}>
                <span>{pokemon.name}</span>
                <span>{pokemon.id}</span>
              </div>
            </Link>
          ))}
      </nav>
    </main>
  )
}
