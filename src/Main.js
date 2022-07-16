import React, { useState, useEffect } from 'react'

const LeaveTabCounter = () => {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        document.addEventListener('visibilitychange', function() {
            if (document.visibilityState == "visible") {
                if (!visible) {
                    setCount(count+1);
                    setVisible(true);
                }
            } else setVisible(false);
        })
    });

    return (
        <div>
          <span>
            Вы покинули страницу: {count} раз <br />
            Вкладка активна? {visible ? 'да' : 'нет'}
          </span>
        </div>
    );
};
export default LeaveTabCounter;