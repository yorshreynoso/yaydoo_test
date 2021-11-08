//PATRONES DE DISENO

/**
 * Un cliente requiere utilizar sendgrid para envíos de email, pero otro cliente Requiere enviarlos por mandril. Se quiere evitar el uso de IF, y realizar un diseño en donde
    podamos utilizar más servicios en caso de que un cliente requiera alguno en específico ¿Qué patrón de diseño utilizarías y por qué?
    Opción 1: Strategy
    Opción 2: Factory Method
    Opción 3: Adapter

    RESPUESTA:

    el patron de diseño que utilizaria seria el "patron Stregy" ya que este patron se utiliza para cuando se crea una aplicacion que aun no ha crecido, y posteriormente se requiere
    hacer crecer pero que no es posible realizar modificaciones de una clase debido a que ya esta hecha.
    Es decir el patron Stregy sugiere que se tome la clase que hace algo y extraer todos esos algoritmos para colocarlos en clases separadas llamadas estrategias. De esta manera se crea
    una interfaz generica que solo expondra a un unico metodo para disparar el algoritmo encapsulado dentro de la estrategia seleccionada.
    De esta manera si se requerie hacer crecer la aplicacion se podra hacer de manera mas sencilla.

 */