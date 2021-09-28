import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919'
  },

  containerLogo: {
    flex: 1.6,
    justifyContent: 'center',
  },

  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 15
  },

  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 22,
    borderRadius: 7,
    padding: 10
  },

  buttonSubmit: {
    backgroundColor: '#ff2',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },

  submitText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },

  texto: {
    fontSize: 14,
    color: '#fff',
    width: '90%',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 40,

  },
  titulo: {
    fontSize: 38,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ff4',
    marginTop: 5
  }
});