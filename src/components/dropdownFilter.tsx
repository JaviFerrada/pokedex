import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import styles from '../styles/OrderByBar.module.css'
import { useDispatch } from 'react-redux'
import {
  orderByAZ,
  orderByInferiorNumber,
  orderBySuperiorNumber,
  orderByZA,
} from '../redux/reducers/pokemonSlice'

const DropdownFilter = () => {
  const [selected, setSelected] = useState('Ordenar por ...')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(orderByInferiorNumber())
  }, [])

  function handleClickCategory(event: any) {
    const newSelection = event.target?.text || 'Ordenar por ...'
    setSelected(newSelection)
    if (newSelection == 'Número Inferior') {
      dispatch(orderByInferiorNumber())
    } else if (newSelection == 'Número Superior') {
      dispatch(orderBySuperiorNumber())
    } else if (newSelection == 'A - Z') {
      dispatch(orderByAZ())
    } else if (newSelection == 'Z - A') {
      dispatch(orderByZA())
    }
  }

  return (
    <Menu
      as="div"
      className={`${styles.buttonContainer} ${styles.w71} relative inline-block text-left mt-8`}
    >
      <div>
        <Menu.Button
          className={`${styles.bgBlack} inline-block justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`}
        >
          {selected}
          <ChevronDownIcon
            className="-mr-1 ml-2 h-5 w-6 float-right"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`mt-0 ${styles.buttonContainer} ${styles.w100} ${styles.bgLightBlack} origin-top-right absolute right-0 rounded-md shadow-lg bg-gray-300 ring-1 ring-black ring-opacity-5 focus:outline-none z-10 `}
        >
          <div className="py-1">
            <Menu.Item>
              {() => (
                <a
                  onClick={handleClickCategory}
                  className={`${styles.bgLightBlack} block px-4 py-2 text-sm `}
                >
                  Número Inferior
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <a
                  onClick={handleClickCategory}
                  className={`${styles.bgLightBlack} block px-4 py-2 text-sm `}
                >
                  Número Superior
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <a
                  onClick={handleClickCategory}
                  className={`${styles.bgLightBlack} block px-4 py-2 text-sm `}
                >
                  A - Z
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <a
                  onClick={handleClickCategory}
                  className={`${styles.bgLightBlack} block px-4 py-2 text-sm`}
                >
                  Z - A
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropdownFilter
