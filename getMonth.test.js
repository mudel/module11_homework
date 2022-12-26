import {getMonth} from "./getMonth.js";

describe("test getMonth", () => {

  it("getMonth 1 to equal январь", () => {
    expect(getMonth(1)).toBe('январь');
  }),

  it("getMonth 5 to equal май", () => {
    expect(getMonth(5)).toBe('май');
  }),

  it("getMonth 12 to equal декабрь", () => {
    expect(getMonth(12)).toBe('декабрь');
  }),

  it("getMonth 0 to equal Ошибка номер месяца меньше 1", () => {
    expect(getMonth(0)).toBe('Ошибка номер месяца меньше 1');
  }),
  
  it("getMonth 15 to equal Ошибка номер месяца больше 12", () => {
    expect(getMonth(15)).toBe('Ошибка номер месяца больше 12');
  }),

  it("getMonth 1.1 to equal Ошибка номер должен быть целым числом", () => {
    expect(getMonth(1.1)).toBe('Ошибка номер должен быть целым числом');
  })

});