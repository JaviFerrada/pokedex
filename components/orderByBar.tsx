import styles from '../styles/OrderByBar.module.css'
import DropdownFilter from './dropdownFilter'

const OrderByBar = () => {
  return (
    <div className={`${styles.mt30} grid grid-cols-1 gap-3 md:grid-cols-2`}>
      <div>
        <button
          className={`${styles.buttonContainer} ${styles.bgLightblue} ${styles.w71} mt-8 text-white font-bold py-2 px-4 rounded`}
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
