const valuteValue = {
    'rub': 1,
    'usd': 75,
    'euro': 84
}

const dataListe = [
    item = {
        id: {
            number: '0001'
        },
        body: {
            header: 'Header 1',
            price: 2400,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '0002'
        },
        body: {
            header: 'Header 2',
            price: 33400,
            text: `Tortor at auctor urna nunc. Tincidunt lobortis feugiat vivamus at augue eget. Tortor dignissim convallis aenean et tortor. Orci phasellus egestas tellus rutrum tellus. Suspendisse interdum consectetur libero id. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Fermentum leo vel orci porta non. Egestas pretium aenean pharetra magna ac placerat. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Ante metus dictum at tempor. Commodo viverra maecenas accumsan lacus vel. Lectus magna fringilla urna porttitor. Gravida in fermentum et sollicitudin ac orci.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '0003'
        },
        body: {
            header: 'Header 3',
            price: 1200,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '0004'
        },
        body: {
            header: 'Header 4',
            price: 5200,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '0005'
        },
        body: {
            header: 'Header 5',
            price: 35600,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '0006'
        },
        body: {
            header: 'Header 6',
            price: 8900,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '0007'
        },
        body: {
            header: 'Header 7',
            price: 7200,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '0008'
        },
        body: {
            header: 'Header 8',
            price: 11100,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '0009'
        },
        body: {
            header: 'Header 9',
            price: 9660,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '0010'
        },
        body: {
            header: 'Header 10',
            price: 5500,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '0011'
        },
        body: {
            header: 'Header 11',
            price: 34700,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '00012'
        },
        body: {
            header: 'Header 12',
            price: 9450,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '0013'
        },
        body: {
            header: 'Header 13',
            price: 25000,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '0014'
        },
        body: {
            header: 'Header 14',
            price: 6430,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '00015'
        },
        body: {
            header: 'Header 15',
            price: 4670,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '0016'
        },
        body: {
            header: 'Header 16',
            price: 64300,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '00117'
        },
        body: {
            header: 'Header 17',
            price: 6430,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '00118'
        },
        body: {
            header: 'Header 18',
            price: 6430,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '0019'
        },
        body: {
            header: 'Header 19',
            price: 64300,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '0020'
        },
        body: {
            header: 'Header 20',
            price: 6530,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '0021'
        },
        body: {
            header: 'Header 21',
            price: 2430,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '0022'
        },
        body: {
            header: 'Header 22',
            price: 8930,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    },
    item = {
        id: {
            number: '0023'
        },
        body: {
            header: 'Header 23',
            price: 64300,
            text: `Cursus eget nunc scelerisque viverra. Integer quis auctor elit sed vulputate. Sit amet venenatis urna cursus eget nunc scelerisque. Sollicitudin tempor id eu nisl nunc. Diam sollicitudin tempor id eu nisl nunc. Morbi leo urna molestie at. Duis tristique sollicitudin nibh sit. Id nibh tortor id aliquet lectus proin nibh. Eget sit amet tellus cras adipiscing. Integer vitae justo eget magna fermentum iaculis. Amet dictum sit amet justo. Quam quisque id diam vel quam elementum pulvinar etiam.`,
            buttom: 'Add to list'
        }
    }
]