import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  StatusBar,
  TextInput,
} from "react-native";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";

let customFonts = {
  "Inter-Black": require("../assets/Fonts/SourceSansPro-Regular.ttf"),
};

const image = require("../assets/background.png");
const user = require("../assets/icons/user2.png");
const email=require("../assets/icons/email.png")

export default class InicioSesion extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <SafeAreaView style={styles.droidSafeArea} />

          <View style={styles.cuadrado}>
            <Image source={user} style={styles.userimage} />
          </View>

          <Text style={styles.titletext}>Inicio de Sesión</Text>

          <View style={styles.contentinput}>
          <Image source={email} style={styles.emailimage}/>
          <TextInput style={styles.textinput}
          placeholder="correo"
          
          >
          </TextInput>


          </View>
          
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    alignItems: "center",
  },

  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },

  cuadrado: {
    borderRadius: 60,
    elevation: 15,
    width: RFValue(124),
    height: RFValue(124),
    justifyContent: "center",
    alignItems: "center",
    marginTop:50,
  },

  userimage: {
    width: RFValue(140),
    height: RFValue(140),
  },

  titletext: {
    fontFamily: "Inter-Black",
    fontSize: RFValue(32),
    color: "white",
    marginTop: 20,
  },

  contentinput:{
    flexDirection:'row',
    width:RFValue(280),
    height:RFValue(43),
    borderRadius:50,
    backgroundColor:"#fff",
    elevation:15,
    alignItems:"center",
    paddingLeft:10,
    marginTop:30,
  },
  

  textinput:{
 
  width:RFValue(230),
  paddingLeft:8,
  alignItems:"center",
  fontFamily: "Inter-Black",
  fontSize:18,
  

  },

  emailimage:{
    width:30,
    height:30,
  }





});
