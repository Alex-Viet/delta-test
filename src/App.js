import './App.css';
import { proceeds } from './data/proceeds';
import { calculatePercent } from './utils/calcPerc';

function App() {
  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr>
            <td>Показатель</td>
            <td>Текущий день</td>
            <td>Вчера</td>
            <td>Этот день недели</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{proceeds[0].item[0].title}</td>
            <td>{proceeds[0].item[1].toLocaleString('ru')}</td>
            <td
              className={
                calculatePercent(proceeds[0].item[1], proceeds[0].item[2]) > 0
                  ? 'table__element table__element_span table__element_bgColorPlus'
                  : calculatePercent(proceeds[0].item[1], proceeds[0].item[2]) <
                    0
                  ? 'table__element table__element_bgColorMin'
                  : 'table__element table__element_span'
              }
            >
              {proceeds[0].item[2].toLocaleString('ru')}
              <span>
                {calculatePercent(proceeds[0].item[1], proceeds[0].item[2])}%
              </span>
            </td>
            <td>{proceeds[0].item[3].toLocaleString('ru')}</td>
          </tr>
          <tr>
            <td colSpan="4" height="50px"></td>
          </tr>
          {proceeds.slice(1).map((el, i) => (
            <tr key={i}>
              <td>{el.item[0].title}</td>
              <td>{el.item[1].toLocaleString('ru')}</td>
              <td
                className={
                  calculatePercent(el.item[1], el.item[2]) > 0
                    ? 'table__element table__element_span table__element_bgColorPlus'
                    : calculatePercent(el.item[1], el.item[2]) < 0
                    ? 'table__element table__element_bgColorMin'
                    : 'table__element table__element_span'
                }
              >
                {el.item[2].toLocaleString('ru')}
                <span>{calculatePercent(el.item[1], el.item[2])}%</span>
              </td>
              <td>{el.item[3].toLocaleString('ru')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
