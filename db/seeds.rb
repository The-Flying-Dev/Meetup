3.times do |i|
  Meetup.create(
    title: "Meetup #{i + 1}",
    address: '100 Baker Street, block 2b',
    description: 'someplace someplace someplace.'
  )
end
