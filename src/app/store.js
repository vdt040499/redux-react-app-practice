import { configureStore } from '@reduxjs/toolkit';
import photoReducer from 'features/Photo/photoSlice';

const rootReducer = {
    photos: photoReducer,
}

const store = configureStore({
    reducer: rootReducer,
    preloadedState: {
        photos: [
          {
            id: 91176,
            categoryId: 5,
            photo: 'https://picsum.photos/id/532/300/300',
            title: 'Enim laboris dolore consectetur et fugiat do amet eiusmod anim proident do culpa irure consectetur.'
          },
          {
            id: 82605,
            categoryId: 1,
            photo: 'https://picsum.photos/id/77/300/300',
            title: 'Dolor Lorem aliqua ea consectetur in tempor reprehenderit consequat officia.'
            
          },
          {
            id: 74760,
            categoryId: 3,
            photo: 'https://picsum.photos/id/722/300/300',
            title: 'Minim anim in sunt esse nisi sit magna consequat in sit laboris adipisicing.'
          },
          {
            id: 39588,
            categoryId: 5,
            photo: 'https://picsum.photos/id/622/300/300',
            title: 'Non aliqua proident magna pariatur eu deserunt eu ipsum velit aliquip.'
          
          },
          {
            id: 72133,
            categoryId: 4,
            photo: 'https://picsum.photos/id/477/300/300',
            title: 'Aliquip elit laboris eu aute irure enim reprehenderit voluptate consectetur minim minim adipisicing commodo.'
           
          },
          {
            id: 95333,
            categoryId: 1,
            photo: 'https://picsum.photos/id/862/300/300',
            title: 'Fugiat fugiat voluptate tempor minim ipsum nisi culpa magna officia ea deserunt tempor.'
          },
          {
            id: 62419,
            categoryId: 3,
            photo: 'https://picsum.photos/id/20/300/300',
            title: 'Anim Lorem consectetur reprehenderit ea nulla est consectetur ullamco minim proident.'
          
          },
          {
            id: 12569,
            categoryId: 5,
            photo: 'https://picsum.photos/id/730/300/300',
            title: 'Occaecat exercitation Lorem cupidatat adipisicing elit duis consequat esse et tempor eu enim cupidatat.'
          },
          {
            id: 47434,
            categoryId: 3,
            photo: 'https://picsum.photos/id/287/300/300',
            title: 'Veniam officia est nulla proident labore.'
          },
          {
            id: 52685,
            categoryId: 3,
            photo: 'https://picsum.photos/id/859/300/300',
            title: 'Ut incididunt do magna culpa consectetur id deserunt et enim elit quis.'
          },
          {
            id: 69928,
            categoryId: 5,
            photo: 'https://picsum.photos/id/397/300/300',
            title: 'Aliqua ad qui occaecat do velit elit deserunt ipsum culpa magna adipisicing.'
          },
          {
            id: 86160,
            categoryId: 5,
            photo: 'https://picsum.photos/id/649/300/300',
            title: 'Id ex enim non dolore reprehenderit eu ullamco.'
          }
        ]
      }
});

export default store;