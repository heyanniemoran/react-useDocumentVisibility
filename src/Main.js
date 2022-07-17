import React, { useState, useEffect } from "react";
import useDocumentVisibility from "@heyanniemoran/use-document-visibility";

const LeaveTabCounter = () => {
  const { count, visible, onVisibilityChange } = useDocumentVisibility();

  useEffect(() => {
    onVisibilityChange((isVisible) => {
      console.log("first handler", isVisible);
    });
    onVisibilityChange((isVisible) => {
      console.log("second handler", isVisible);
    });
  }, []);

  return (
    <div>
      <span>
        Вы покинули страницу: {count} раз <br />
        Вкладка активна? {visible ? "да" : "нет"}
      </span>
    </div>
  );
};
export default LeaveTabCounter;
