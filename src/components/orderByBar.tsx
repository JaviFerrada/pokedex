import styles from '../styles/OrderByBar.module.css'
import DropdownFilter from './dropdownFilter'
import { useDispatch } from 'react-redux'
import { shufflePokemon } from '../redux/reducers/pokemonSlice'

const OrderByBar = () => {
  const dispatch = useDispatch()

  const handleShuffle = () => {
    dispatch(shufflePokemon())
  }

  return (
    <div className={`${styles.mt30} grid grid-cols-1 gap-3 md:grid-cols-2`}>
      <div>
        <button
          className={`${styles.buttonContainer} ${styles.bgLightblue} ${styles.w71} mt-8 text-white font-bold py-2 px-4 rounded`}
          onClick={handleShuffle}
        >
          ¡Sorpréndeme!
        </button>
      </div>
      <div>
        <DropdownFilter />
      </div>
    </div>
  )
}

export default OrderByBar
