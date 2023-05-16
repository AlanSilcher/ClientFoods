import styles from './Paginated.module.css';


const Paginated = ({totalPosts, postPerPage, setcurrentPage}) => {
    let pages = []
    
    for (let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++) {
        pages.push(i)
    }

    return(
        <div>
            {
                pages.map((page, index) => {
                    return <button className={styles.button} key={index} onClick={() => setcurrentPage(page)}>{page}</button>
                })
            }
        </div>
    )
}


export default Paginated