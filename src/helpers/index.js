const normalizeOptions = (obj) => {
  let options = {
    //  пауза перед началом анимации
    delay: 0,
    /*
      Направление анимации
      normal - вперёд #default
      reverse - назад
      alternate - вперд, назад после каждой итерации
      altetnate-reverse - назад, вперёд после каждой итерации
    */
    direction: 'normal',
    // продолжительность анимации ms
    duration: 0,
    // Скорость изменения анимации с течением времени
    /*
      linear(1, -0.5, 0)
      linear
      cubic-bezier(0.42, 0.0, 1.0, 1.0)
      ease
      ease-in
      ease-out
      ease-in-out
      steps(4, end)
      step-start
      step-end
    */
    easing: 'linear',
    // Количество миллисекунд задержки после окончания анимации
    endDelay: 0,
    /*
      backwards - первый keyframe применяется перед воспроизвекдением
      forwards - последний keyframe применяется после воспроизведения
      both - 
    */
    fill: 'none',
    // В какой момент итерации должна начинаться анимация
    iterationStart: 0.0,
    // Количество раз которые анимация будет повторятся число или infinite
    iterations: 1,
    composite: 'replace',
    iterationComposite: 'replace',
    pseudoElement: undefined,
    // animate() additional options
    id: Date.now(),
    rangeEnd: undefined,
    rangeStart: undefined,
    timeline: new DocumentTimeline()
  }
  for (let key in obj) {
    // поддержка массивов
    if (options.hasOwnProperty(key)) {
      options[key] = obj[key] || options[key]
    }
  }
  return options
}

// Parse property
export const parseOptions = (options, arrayLength) => {
  const optionsResult = new Array(arrayLength)

  for (var i = 0; i < arrayLength; i++) {
    optionsResult[i] = {}
    for (var key in options) {
      if (Array.isArray(options[key])) {
        optionsResult[i][key] = options[key][i] || null
      } else {
        optionsResult[i][key] = options[key]
      }
    }
    optionsResult[i] = normalizeOptions(optionsResult[i])
  }
  return optionsResult
}