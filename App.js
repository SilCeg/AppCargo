import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>

        <Text style={styles.Text}>Cargos do TI</Text>
        <Text style={styles.Texto2}>Desenvolvedor Junior</Text>
        <Text style={styles.Texto3}>Um desenvolvedor júnior é alguém que está no início de sua carreira como programador, geralmente com até 2 anos de experiência. Eles podem ter concluído um curso de programação, faculdade ou até mesmo feito a transição de outra área.</Text>
        <Image style={styles.img} source={require('./assets/junior.png')} /> 



        <Text style={styles.Texto2}>Desenvolvedor Pleno</Text>
        <Text style={styles.Texto3}>O desenvolvedor pleno é um profissional que demonstrou capacidade de executar tarefas de complexidade moderada a alta com pouca ou nenhuma supervisão. Este nível é caracterizado por uma sólida compreensão técnica e a habilidade de aplicar esse conhecimento na solução de problemas complexos.</Text>
        <Image style={styles.img} source={require('./assets/middle.png')} /> 

        <Text style={styles.Texto2}>Desenvolvedor Senior</Text>
        <Text style={styles.Texto3}>Ele orienta e treina desenvolvedores mais novos, ajudando-os a crescer e melhorar suas habilidades. Também é responsável por tomar decisões importantes relacionadas ao projeto, como a escolha de tecnologias e estratégias de desenvolvimento. Desenvolvedores sêniores têm uma forte capacidade de pensar estrategicamente.</Text>
        <Image style={styles.img} source={require('./assets/Senior.png')} /> 
        <StatusBar style="auto" />
    </ScrollView>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'gray',
  },

  Text: {
    textAlign: 'center',
   fontSize: 30,
   margin: 25,
   fontStyle: 'bold',
  },

  Texto2: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 25,
    marginTop: 50,
  },

  Texto3: {
    textAlign: 'justify',
    margin: 40,
  },

  img: {
    height: '250',
    width: '200',
    justifyContent: 'center',
    marginTop: 40,
    marginLeft: 100,
  },
});
