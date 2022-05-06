import styles from '../styles/Filter.module.css'

const Filter = () => {
  return (
    <div className={`${styles.filterContainer}`}>
      <div
        className={`${styles.filterContent} grid grid-cols-1 gap-3 md:grid-cols-2`}
      >
        <div className={`${styles.bannerContainer} mt-8 mx-7`}>
          <div className={`${styles.title}`}> Nombre o número</div>
          <div className="flex justify-center w-full max-h-12">
            <div className="mb-3 w-full ">
              <div className="input-group relative flex flex-wrap items-stretch w-85 mb-4 rounded">
                <input
                  type="search"
                  className="form-control relative flex-auto min-w-0 block w-75 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <span
                  className="bg-orange-500 hover:bg-orange-700 input-group-text flex items-center ml-6 px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
                  id="basic-addon2"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    className="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <p className={`${styles.subtitle}`}>
            ¡Usa la búsqueda avanzada para encontrar Pokémon por su tipo,
            debilidad, habilidad y demás datos!
          </p>
        </div>
        <div
          className={`${styles.bannerContainer} ${styles.bgGreen} ${styles.bannerHeight} my-8 ml-7 flex justify-center `}
        >
          <h2 className={`${styles.banner}`}>
            Busca un Pokémon por su nombre o usando su número de la Pokédex
            Nacional.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Filter
