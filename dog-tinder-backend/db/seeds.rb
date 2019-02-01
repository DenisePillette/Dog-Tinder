dog_attributes = [
  {
    name: 'Molly',
    age: 2,
    enjoys: 'Long naps on the couch, and a warm fire.',
    image: 'https://www.akc.org/wp-content/themes/akc/component-library/assets/img/welcome.jpg'
  },
  {
    name: 'Homer',
    age: 5,
    enjoys: 'Food mostly, really just food.',
    image: 'https://i.pinimg.com/originals/c7/55/08/c75508b10eaf687bf1954d3a073b6d63.jpg'
  },
  {
    name: 'Dakota',
    age: 4,
    enjoys: 'Fetch, fetch, and more fetch.',
    image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12232719/Golden-Retriever-On-White-05.jpg'
  },
  {
    name: 'Chief',
    age: 9,
    enjoys: 'Belly rubs, napping, and walks.',
    image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225919/Pembroke-Welsh-Corgi-On-White-01.jpg'
  }
]

dog_attributes.each do |attributes|
  Dog.create(attributes)
end
