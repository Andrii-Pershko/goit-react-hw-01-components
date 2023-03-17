import PropTypes from 'prop-types';
import css from './Statistics.module.css'
import {getRandomHexColor} from 'utils/get-random-color.js'

export const Statistics = ( {title = false, stats} ) => {
    console.log(getRandomHexColor())
    return (<section className={css.statistics}>
        {title && <h2 className={css.title}> {title}</h2>}
        <ul className={css['stat-list']}>
            {stats.map(({label, percentage, id}) =>
                <li style={{backgroundColor: getRandomHexColor()}} key = {id} className={css.item}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
                </li> )}
        </ul>
        </section> )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape),

}
