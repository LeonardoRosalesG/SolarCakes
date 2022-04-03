import { createStore } from 'vuex'
import {Vue}  from 'vue'

export default createStore({
  state: {
    orderID:1,
    flavours:{
      asteroid:{name:"Asteroide", flavour:"Chocolate", price:200, quantity:51},
      solar_core:{name:"Núcleo solar", flavour:"Durazno", price:150, quantity:51},
      solar_cortex:{name:"Corteza solar", flavour:"Fresa", price:150, quantity:51},
      spacial_cold:{name:"Frío espacial", flavour:"Menta con chocolate", price:250, quantity:51},
      lunar_surface:{name:"Superficie lunar", flavour:"Queso", price:200, quantity:51},
      spacial_void:{name:"Vacio espacial", flavour:"Café", price:270, quantity:51},
      eclipse:{name:"Eclipse", flavour:"Mitad chocolate semiamargo, mitad chocolate blanco", price:270, quantity:51},
    },
    decorations:{
      asteroids_belt:{name:"Cinturón de asteroides", description:"Bolas de cereal con chocolate (5 pzas.)", price:80, quantity:15},
      shooting_star:{name:"Estrella fugaz", description:"Paleta con forma de estrella fugaz sabor mango", price:30, quantity:15},
      space_dust:{name:"Polvo estelar", description:"Azúcar glass con chocolate en polvo", price:25, quantity:15},
      supernova:{name:"Supernova", description:"Fresa, kiwi, durazno y manzana en rodajas", price:100, quantity:15},
      cosmic_cloud:{name:"Nube cósmica", description:"Chantilli pintado de un color a elección del cliente", price:100, quantity:15},
      
    },
    orders:[{order_id:1, 
             client_name:"Juan Pérez",
             phone:"5567994444", 
             email:"email@email.com", 
             address:"Quos enim illo, officiis ipsa doloribus incidunt nesciunt atque aspernatur similique dicta a in quam voluptatem nobis? At nemo aspernatur incidunt esse accusamus ullam facere! Doloremque nam hic asperiores quaerat?",
             date:"01-01-1999",
            general_description: { flavours:["Supernova"], decorations:["Asteroide"]},
            individual_prices: [[200], [100]] }],
    nameFlag:"",
    phoneFlag:"",
    emailFlag:"",
    addressFlag:"",
    dateFlag:"",
    
    flavoursFlag:[],

    flavourPrice: 0,
    flavourNames: [],
    flavourPrices: [],
    

    decorationsFlag:[],

    decorationPrice: 0,
    decorationNames: [],
    decorationPrices: [],
    
    orderFlag:{order_id:0, client_name:'', 
              phone:'', email:'', address:'', 
              date:'', 
              general_description:{flavours:[], decorations:[]}, individual_prices:[]}
  },
  getters: {
    getFlavours: (state) => state.flavours,
    getDecorations: (state) => state.decorations,
    getOrders: (state) => state.orders,
    
    getName: (state) => state.nameFlag,
    getPhone: (state) => state.phoneFlag,
    getEmail: (state) => state.emailFlag,
    getAddress: (state) => state.addressFlag,
    getDate: (state) => state.dateFlag,

    getContactData: (state) =>[state.nameFlag, state.phoneFlag, state.emailFlag, state.addressFlag, state.dateFlag],
    getWholeData: (state) => [state.nameFlag, state.phoneFlag, state.emailFlag, state.addressFlag, state.dateFlag,state.flavoursFlag, state.decorationsFlag],

    
    getFlavoursFlag: (state) => state.flavoursFlag,
    getDecorationsFlag: (state) => state.decorationsFlag,

    getFlavourPriceSum:(state) => state.flavourPrice,
    getFlavourPrices:(state) => state.flavourPrices,
    getFlavourNames:(state) => state.flavourNames,

    getDecorationPriceSum:(state) => state.decorationPrice,
    getDecorationPrices:(state) => state.decorationPrices,
    getDecorationNames:(state) => state.decorationNames,
  
    getOrderFlag: (state) => state.orderFlag
  },
  mutations: {
    getDecorationsFromClient(state, decorationsSelected){
      state.decorationsFlag = decorationsSelected;
    },
    getFlavoursFromClient(state, flavoursSelected){
      state.flavoursFlag = flavoursSelected;
      },
    setName(state, name){
      state.nameFlag = name.trim();
    },
    setPhone(state, phone){
      state.phoneFlag = phone.trim();
    }, 
    setEmail(state, email){
      state.emailFlag = email.trim();
    }, 
    setAddress(state, address){
      state.addressFlag = address.trim();
    }, 
    setDate(state, date){
      state.dateFlag = date;
    }, 
    setFlavourPricesSum(state){
      state.flavourPrice = state.flavoursFlag.map(flavourID => state.flavours[flavourID].price).reduce((a,b) => a+ b, 0)
    },
    setFlavourNames(state){
      state.flavourNames = state.flavoursFlag.map(flavourID => state.flavours[flavourID].name)
    },
    setFlavourPrices(state){
      state.flavourPrices = state.flavoursFlag.map(flavourID => state.flavours[flavourID].price)
    },


    setDecorationPricesSum(state){
      state.decorationPrice = state.decorationsFlag.map(decorationID => state.decorations[decorationID].price).reduce((a,b) => a+ b, 0)
    },
    setDecorationNames(state){
      state.decorationNames = state.decorationsFlag.map(decorationID => state.decorations[decorationID].name)
    },
    setDecorationPrices(state){
      state.decorationPrices = state.decorationsFlag.map(decorationID => state.decorations[decorationID].price)
    },
    setOrderFlag(state){
      state.orderID+=1;
      state.orderFlag = 
       {
         order_id:state.orderID, 
         client_name:state.nameFlag,
         phone:state.phoneFlag,
         email:state.emailFlag,
         address:state.addressFlag,
         date:state.dateFlag,
         general_description:{
           flavours:state.flavourNames, decorations: state.decorationNames}, 
           individual_prices:[state.flavourPrices, state.decorationPrices]}
        state.flavoursFlag.map(flavourID => state.flavours[flavourID].quantity--)
        state.decorationsFlag.map(decorationID => state.decorations[decorationID].quantity--)
    },
    addOrder(state){
      state.orders.push(state.orderFlag);
    },
  },
  
  actions: {
    getDecorationsFromClient({commit}, decorationsSelected){
      commit("getDecorationsFromClient", decorationsSelected);
    },
    getFlavoursFromClient({commit}, flavoursSelected){
      commit("getFlavoursFromClient", flavoursSelected);
    },
    setName({commit}, name){
      commit("setName", name);
    },
    setPhone({commit}, phone){
      commit("setPhone", phone);
    },
    setEmail({commit}, email){
      commit("setEmail", email);
    },
    setAddress({commit}, address){
      commit("setAddress", address);
    },
    setDate({commit}, date){
      commit("setAddress", date);
    },

    setFlavourPricesSum({commit}){
      commit("setFlavourPricesSum")
    },
    setFlavourNames({commit}){
      commit("setFlavourNames")
    },
    setFlavouPrices({commit}){
      commit("setFlavourPrices")
    },

    setDecorationPricesSum({commit}){
      commit("setDecorationPricesSum")
    },
    setDecorationNames({commit}){
      commit("setDecorationNames")
    },
    setDecorationPrices({commit}){
      commit("setDecorationPrices")
    },
    setOrderFlag({commit}){
      commit("setOrderFlag")
    },
    addOrder({commit}){
      commit("addOrder")
    }

  },
})
