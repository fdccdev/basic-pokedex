import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDetail } from '../services/fetchDetail'
import styles from './detail.module.css'
import { Pkmn } from '../types/types'
import pokeball from '../assets/pokeball.png'

const Detail = () => {
  const [pkmn, setPkmn] = useState<Pkmn>()
  const navigate = useNavigate()
  const { name } = useParams()
  const getPkmn = async () => {
    const pokemon = await getDetail(name)
    setPkmn(pokemon)
  }

  useEffect(() => {
    getPkmn()
  }, [])

  return (
    <>
      <button className={styles.button} onClick={() => navigate(-1)}>
        <img src={pokeball} alt="Back" /> Go Back
      </button>
      <div className={styles.container}>
        <div className={styles.infoHeader}>
          <img className={styles.infoImg} src={pkmn?.img} alt={pkmn?.name} />
          <h2>{pkmn?.name}</h2>
          <h4>
            Types:
            {pkmn &&
              pkmn?.type?.map((type) => (
                <span key={type.type.name}> {type.type.name}</span>
              ))}
          </h4>
        </div>
        <hr />
        <div className={styles.infoStats}>
          <table>
            <tbody>
              <tr>
                <td>HP:</td>
                <td>{pkmn?.hp}</td>
              </tr>
              <tr>
                <td>Atk:</td>
                <td>{pkmn?.atk}</td>
              </tr>
              <tr>
                <td>Def:</td>
                <td>{pkmn?.def}</td>
              </tr>
              <tr>
                <td>Sp.Atk:</td>
                <td>{pkmn?.spatk}</td>
              </tr>
              <tr>
                <td>Sp.Def:</td>
                <td>{pkmn?.spdef}</td>
              </tr>
              <tr>
                <td>Speed:</td>
                <td>{pkmn?.speed}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Detail
