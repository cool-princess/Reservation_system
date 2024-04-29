const Calendar = () => {
  return(
    <div>
        <div className="calendar">
            <label for="reservation_day">利用日時:</label>
            <input type="date" id="reservation_day" name="reservation_day" lang="ja" />
        </div>
      <div className='DateTimeLayout'>
        <div className='DateTimeItem'>
            <select className="selectpicker w100 show-tick form-select">
                {[...Array(24)].map((_, index) => (
                    <option key={index} value={index}>{index} 時</option>
                ))}
            </select>
            <select className="selectpicker w100 show-tick form-select">
                {[...Array(60)].map((_, index) => (
                    <option key={index} value={index}>{index} 分</option>
                ))}
            </select>
        </div>
        ~
        <div className='DateTimeItem'>
            <select className="selectpicker w100 show-tick form-select">
                {[...Array(24)].map((_, index) => (
                    <option key={index} value={index}>{index} 時</option>
                ))}
            </select>
            <select className="selectpicker w100 show-tick form-select">
                {[...Array(60)].map((_, index) => (
                    <option key={index} value={index}>{index} 分</option>
                ))}
            </select>
        </div>
    </div>
    <div className="reservation-btn-layout">
        <button
            onClick={() => {}}
            type="submit"
            className="btn btn-thm"
            >
            クリア
        </button>
        <button
            onClick={() => {}}
            type="submit"
            className="btn btn-thm reservation-btn"
            >
            適用する
        </button>
    </div>
    </div>
  )
}

export default Calendar;