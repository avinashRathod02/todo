import React from 'react';
import { View,Image } from 'react-native';
import { connect } from 'react-redux'
// import LOADER from '../../constants/Images';
import img from '../../../assets/loader_ripple.gif'
// console.log(LOADER);
let Loading = ({ loading }) => (
loading ?
<View style={{ flex:1,alignSelf: 'center',alignItems:'center',justifyContent:'center' }}>
   <Image  source={img} />
</View> :
null
);
const mapStateToProps = (state) => ({loading: state.todos.loading})
Loading = connect(mapStateToProps,null)(Loading)
export default Loading;