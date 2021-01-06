// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import 'jest-color'

jest.mock("./game/Infobox", () => {
    return {
      __esModule: true,
      default: ({msg, showBtn, endTurnCallback}) => {
        return <div>
            <p>{msg}</p>
            {showBtn && <div onClick={endTurnCallback}>End Turn</div>}
        </div>;
      },
    };
  });
