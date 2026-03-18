import { LearningContent } from '../types';

export const learningContent: Record<string, LearningContent> = {
  circle: {
    name: 'Circle',
    math: {
      title: 'Circle in Mathematics',
      explanation: 'A circle is a shape where all points are the same distance from the center. The distance from the center to the edge is called the radius!',
      funFacts: [
        'The formula for the area of a circle is πr² (pi times radius squared)',
        'A pizza is a perfect example of a circle!',
        'Wheels are circles because they roll smoothly'
      ],
      quiz: [
        {
          question: 'What do we call the distance from the center of a circle to its edge?',
          options: ['Radius', 'Diameter', 'Circumference', 'Area'],
          correctAnswer: 'Radius'
        }
      ]
    },
    science: {
      title: 'Circles in Science',
      explanation: 'Circles appear everywhere in nature! The Sun and Moon look like circles from Earth. Planets orbit in nearly circular paths!',
      funFacts: [
        'The Sun is a giant ball of hot gas',
        'Planets move in elliptical (almost circular) orbits',
        'Water drops form circles because of surface tension'
      ],
      quiz: [
        {
          question: 'Which of these is a circle in the sky?',
          options: ['The Sun', 'A Cloud', 'A Rainbow', 'Lightning'],
          correctAnswer: 'The Sun'
        }
      ]
    },
    general: {
      title: 'Circles Around Us',
      explanation: 'Circles are everywhere! From wheels on cars to coins in your pocket, circles help us in daily life.',
      funFacts: [
        'Wheels are circular so vehicles can move smoothly',
        'Coins are circles so they can roll',
        'Clocks are circular to show time in a cycle'
      ],
      quiz: [
        {
          question: 'Why are wheels circular?',
          options: ['To roll smoothly', 'To look pretty', 'To save space', 'No reason'],
          correctAnswer: 'To roll smoothly'
        }
      ]
    }
  },
  triangle: {
    name: 'Triangle',
    math: {
      title: 'Triangle in Mathematics',
      explanation: 'A triangle has 3 sides and 3 corners (angles). All the angles add up to 180 degrees!',
      funFacts: [
        'There are different types: equilateral, isosceles, and scalene',
        'Triangles are the strongest shape in construction',
        'The area formula is: ½ × base × height'
      ],
      quiz: [
        {
          question: 'How many sides does a triangle have?',
          options: ['3', '4', '5', '6'],
          correctAnswer: '3'
        }
      ]
    },
    science: {
      title: 'Triangles in Science',
      explanation: 'Triangles are super strong! Engineers use them in bridges and buildings because they don\'t bend easily.',
      funFacts: [
        'Mountain peaks often form triangular shapes',
        'The food pyramid is a triangle showing healthy eating',
        'Triangular shapes help distribute weight evenly'
      ],
      quiz: [
        {
          question: 'Why do engineers use triangles in bridges?',
          options: ['They are strong', 'They look nice', 'They are cheap', 'They are easy to make'],
          correctAnswer: 'They are strong'
        }
      ]
    },
    general: {
      title: 'Triangles Around Us',
      explanation: 'Triangles are in road signs, musical instruments, and even in the slices of pizza!',
      funFacts: [
        'Traffic signs are often triangular for warning',
        'The triangle musical instrument makes a ringing sound',
        'Pyramids in Egypt are made of triangles'
      ],
      quiz: [
        {
          question: 'What shape is a slice of pizza?',
          options: ['Triangle', 'Circle', 'Square', 'Rectangle'],
          correctAnswer: 'Triangle'
        }
      ]
    }
  },
  square: {
    name: 'Square',
    math: {
      title: 'Square in Mathematics',
      explanation: 'A square has 4 equal sides and 4 right angles (90 degrees each). It\'s a special type of rectangle!',
      funFacts: [
        'Area of a square is side × side',
        'All sides are the same length',
        'Checkerboard has 64 small squares'
      ],
      quiz: [
        {
          question: 'What is special about a square\'s sides?',
          options: ['All equal length', 'All different', 'Only 2 are equal', 'They curve'],
          correctAnswer: 'All equal length'
        }
      ]
    },
    science: {
      title: 'Squares in Science',
      explanation: 'Squares help us organize things! Scientists use square grids to study patterns and measure things accurately.',
      funFacts: [
        'Crystal structures often have square patterns',
        'Graph paper has squares to help draw and measure',
        'Some cells under a microscope look like squares'
      ],
      quiz: [
        {
          question: 'What tool uses squares to help us draw?',
          options: ['Graph paper', 'Ruler', 'Compass', 'Protractor'],
          correctAnswer: 'Graph paper'
        }
      ]
    },
    general: {
      title: 'Squares Around Us',
      explanation: 'Windows, tiles, and game boards often use squares because they fit together perfectly!',
      funFacts: [
        'Chess boards have 64 squares',
        'Rubik\'s cube has square faces',
        'Many buildings have square windows'
      ],
      quiz: [
        {
          question: 'How many squares are on a chess board?',
          options: ['64', '32', '100', '49'],
          correctAnswer: '64'
        }
      ]
    }
  },
  tree: {
    name: 'Tree',
    math: {
      title: 'Trees in Mathematics',
      explanation: 'Trees grow in mathematical patterns! Their branches split in ways we can count and measure.',
      funFacts: [
        'Tree rings tell us the age of the tree (one ring per year)',
        'Branches often split following number patterns',
        'We can calculate tree height using shadows and angles'
      ],
      quiz: [
        {
          question: 'How can we tell a tree\'s age?',
          options: ['Count the rings', 'Measure height', 'Count leaves', 'Look at color'],
          correctAnswer: 'Count the rings'
        }
      ]
    },
    science: {
      title: 'Trees in Science',
      explanation: 'Trees are amazing! They make oxygen for us to breathe and provide homes for animals. They have roots, trunk, branches, and leaves.',
      funFacts: [
        'Trees produce oxygen through photosynthesis',
        'One large tree can provide oxygen for 2 people',
        'Trees absorb carbon dioxide and help clean the air'
      ],
      quiz: [
        {
          question: 'What do trees produce that we breathe?',
          options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Water'],
          correctAnswer: 'Oxygen'
        }
      ]
    },
    general: {
      title: 'Trees Around Us',
      explanation: 'Trees give us shade, fruits, and wood. They make our environment beautiful and healthy!',
      funFacts: [
        'Apple trees give us delicious apples',
        'Paper is made from tree wood',
        'Birds build nests in tree branches'
      ],
      quiz: [
        {
          question: 'What is paper made from?',
          options: ['Tree wood', 'Plastic', 'Metal', 'Glass'],
          correctAnswer: 'Tree wood'
        }
      ]
    }
  },
  sun: {
    name: 'Sun',
    math: {
      title: 'Sun in Mathematics',
      explanation: 'The Sun is a huge sphere! It\'s so big that 1.3 million Earths could fit inside it.',
      funFacts: [
        'The Sun is about 149.6 million kilometers from Earth',
        'Light from the Sun takes 8 minutes to reach Earth',
        'The Sun is 109 times wider than Earth'
      ],
      quiz: [
        {
          question: 'How long does sunlight take to reach Earth?',
          options: ['8 minutes', '1 minute', '1 hour', '1 second'],
          correctAnswer: '8 minutes'
        }
      ]
    },
    science: {
      title: 'Sun in Science',
      explanation: 'The Sun is a star at the center of our solar system. It provides light and heat that make life on Earth possible!',
      funFacts: [
        'The Sun is made mostly of hydrogen and helium',
        'It\'s about 4.6 billion years old',
        'The Sun\'s core temperature is about 15 million degrees Celsius'
      ],
      quiz: [
        {
          question: 'What is the Sun?',
          options: ['A star', 'A planet', 'A moon', 'An asteroid'],
          correctAnswer: 'A star'
        }
      ]
    },
    general: {
      title: 'Sun in Our Daily Life',
      explanation: 'The Sun gives us daylight, helps plants grow, and keeps us warm. Always remember to protect your eyes and skin from too much sun!',
      funFacts: [
        'Plants need sunlight to make food',
        'The Sun rises in the east and sets in the west',
        'Solar panels convert sunlight into electricity'
      ],
      quiz: [
        {
          question: 'Why do plants need the Sun?',
          options: ['To make food', 'To sleep', 'To drink water', 'To change color'],
          correctAnswer: 'To make food'
        }
      ]
    }
  },
  cat: {
    name: 'Cat',
    math: {
      title: 'Cats and Math',
      explanation: 'Cats are amazing at judging distances when they jump! They use their eyes to calculate how far they need to leap.',
      funFacts: [
        'Cats can jump up to 6 times their body length',
        'A cat\'s whiskers are exactly as wide as their body',
        'Cats sleep 12-16 hours a day (that\'s more than half the day!)'
      ],
      quiz: [
        {
          question: 'How many times their body length can cats jump?',
          options: ['6 times', '2 times', '10 times', '1 time'],
          correctAnswer: '6 times'
        }
      ]
    },
    science: {
      title: 'Cats in Science',
      explanation: 'Cats are mammals with amazing abilities! They have excellent night vision, sharp claws, and super hearing.',
      funFacts: [
        'Cats can see in the dark 6 times better than humans',
        'They can hear sounds too high-pitched for human ears',
        'Cats have over 230 bones (humans have 206)'
      ],
      quiz: [
        {
          question: 'What type of animal is a cat?',
          options: ['Mammal', 'Reptile', 'Bird', 'Fish'],
          correctAnswer: 'Mammal'
        }
      ]
    },
    general: {
      title: 'Cats as Pets',
      explanation: 'Cats are popular pets around the world! They are independent, clean, and love to play.',
      funFacts: [
        'Cats purr when they\'re happy or comfortable',
        'A group of cats is called a "clowder"',
        'Cats spend 30-50% of their day grooming themselves'
      ],
      quiz: [
        {
          question: 'What sound do happy cats make?',
          options: ['Purr', 'Bark', 'Chirp', 'Roar'],
          correctAnswer: 'Purr'
        }
      ]
    }
  },
  house: {
    name: 'House',
    math: {
      title: 'Houses and Math',
      explanation: 'Building a house requires lots of math! Architects use geometry to design rooms and calculate areas.',
      funFacts: [
        'Architects use rectangles and squares to design rooms',
        'The roof is often a triangle shape for stability',
        'Builders measure everything in meters and centimeters'
      ],
      quiz: [
        {
          question: 'What shape is most house roofs?',
          options: ['Triangle', 'Circle', 'Square', 'Pentagon'],
          correctAnswer: 'Triangle'
        }
      ]
    },
    science: {
      title: 'Houses in Science',
      explanation: 'Houses protect us from weather! The walls keep us warm in winter and cool in summer by insulating us.',
      funFacts: [
        'Insulation keeps houses at comfortable temperatures',
        'Windows let in natural light and fresh air',
        'Strong foundations prevent houses from sinking'
      ],
      quiz: [
        {
          question: 'What protects us from hot and cold weather?',
          options: ['House walls', 'Trees', 'Cars', 'Books'],
          correctAnswer: 'House walls'
        }
      ]
    },
    general: {
      title: 'Houses in Our Lives',
      explanation: 'A house is where families live, eat, sleep, and spend time together. It\'s our safe and cozy place!',
      funFacts: [
        'Houses come in many styles: apartments, cottages, mansions',
        'Every house has important rooms: kitchen, bedroom, bathroom',
        'We decorate houses to make them feel like home'
      ],
      quiz: [
        {
          question: 'Why do we need houses?',
          options: ['For shelter and safety', 'To look pretty', 'To store cars', 'To plant gardens'],
          correctAnswer: 'For shelter and safety'
        }
      ]
    }
  },
  star: {
    name: 'Star',
    math: {
      title: 'Stars and Math',
      explanation: 'Stars have points! A traditional star shape has 5 points, and each point is an angle we can measure.',
      funFacts: [
        'A 5-pointed star has angles of 36 degrees at each point',
        'Stars are used in patterns and symmetry lessons',
        'We can count stars to learn about big numbers'
      ],
      quiz: [
        {
          question: 'How many points does a traditional star have?',
          options: ['5', '4', '6', '8'],
          correctAnswer: '5'
        }
      ]
    },
    science: {
      title: 'Stars in Space',
      explanation: 'Real stars are giant balls of burning gas in space! Our Sun is a star, and at night we see thousands of other stars.',
      funFacts: [
        'Stars produce their own light through nuclear fusion',
        'The closest star to Earth (besides the Sun) is 4.2 light-years away',
        'Stars come in different colors: red, yellow, blue, and white'
      ],
      quiz: [
        {
          question: 'Is our Sun a star?',
          options: ['Yes', 'No', 'Sometimes', 'Only at night'],
          correctAnswer: 'Yes'
        }
      ]
    },
    general: {
      title: 'Stars in Culture',
      explanation: 'Stars symbolize wishes, dreams, and excellence! We use stars in flags, awards, and decorations.',
      funFacts: [
        'Gold stars are given as rewards for good work',
        'Many country flags have stars on them',
        'People make wishes on shooting stars'
      ],
      quiz: [
        {
          question: 'What do we give children for good work?',
          options: ['Gold stars', 'Flowers', 'Rocks', 'Clouds'],
          correctAnswer: 'Gold stars'
        }
      ]
    }
  },
  flower: {
    name: 'Flower',
    math: {
      title: 'Flowers and Math',
      explanation: 'Flowers often have petals arranged in mathematical patterns! Many flowers follow the Fibonacci sequence.',
      funFacts: [
        'Sunflower seeds spiral in patterns of 55 and 89',
        'Most flowers have 5 or 8 petals',
        'Flowers show beautiful symmetry'
      ],
      quiz: [
        {
          question: 'How are flower petals often arranged?',
          options: ['In patterns', 'Randomly', 'In squares', 'In triangles'],
          correctAnswer: 'In patterns'
        }
      ]
    },
    science: {
      title: 'Flowers in Science',
      explanation: 'Flowers are the reproductive part of plants! They attract bees and butterflies with their colors and sweet nectar.',
      funFacts: [
        'Bees help flowers make seeds by spreading pollen',
        'Flowers come in almost every color',
        'Some flowers only bloom at certain times of year'
      ],
      quiz: [
        {
          question: 'What insects help flowers grow seeds?',
          options: ['Bees', 'Ants', 'Mosquitoes', 'Flies'],
          correctAnswer: 'Bees'
        }
      ]
    },
    general: {
      title: 'Flowers in Our Lives',
      explanation: 'Flowers make the world beautiful! We give flowers as gifts, plant them in gardens, and enjoy their lovely smell.',
      funFacts: [
        'Roses are a symbol of love',
        'Sunflowers turn to face the sun',
        'Many perfumes are made from flower scents'
      ],
      quiz: [
        {
          question: 'Why do people give flowers?',
          options: ['As gifts to show love', 'To eat them', 'To make noise', 'To play games'],
          correctAnswer: 'As gifts to show love'
        }
      ]
    }
  }
};

export const getDefaultContent = (): LearningContent => ({
  name: 'Unknown Object',
  math: {
    title: 'Keep Drawing!',
    explanation: 'Try drawing something like a circle, triangle, square, tree, sun, cat, house, star, or flower!',
    funFacts: ['Every drawing is a chance to learn something new!'],
    quiz: []
  },
  science: {
    title: 'Keep Drawing!',
    explanation: 'Try drawing something like a circle, triangle, square, tree, sun, cat, house, star, or flower!',
    funFacts: ['Science is all around us!'],
    quiz: []
  },
  general: {
    title: 'Keep Drawing!',
    explanation: 'Try drawing something like a circle, triangle, square, tree, sun, cat, house, star, or flower!',
    funFacts: ['Every drawing helps you learn!'],
    quiz: []
  }
});
