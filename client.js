fetch("/", {
  method: "POST",
  body: JSON.stringify(
  {
    "name": "butteredBagel",
      "ingredients": [
        "1 bagel",
        "butter"
      ],
    "instructions": [
      "cut the bagel",
      "spread butter on bagel"
    ]
  })
  .then(res => {
    console.log('it worked?')
  })
  .catch(err => {
    console.log('uh oh:', err.message)
  })
})