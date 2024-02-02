export interface Adapter<T> {
    adapt(item: any): T;
}



// export: Ce mot-clé est utilisé pour rendre l'interface Adapter<T> accessible depuis d'autres fichiers ou modules TypeScript.
//  Il permet d'exporter la définition de l'interface afin qu'elle puisse être importée ailleurs.

// interface Adapter<T> : Cette ligne définit une interface nommée Adapter paramétrée par un type générique T.
//  Une interface en programmation est un moyen de décrire la structure d'un objet ou d'une classe sans implémenter de fonctionnalités.
//   Dans ce cas, l'interface a une méthode appelée adapt qui prend un argument de type any et renvoie un objet de type T.

// adapt(item: any): T; : C'est la signature de la méthode adapt dans l'interface. 
// Elle spécifie que la méthode prend un paramètre item de type any (ce qui signifie qu'elle peut accepter n'importe quel type d'objet) et renvoie un objet de type T.
//  Le type T est un type générique qui sera déterminé lors de l'implémentation de cette interface dans une classe ou un objet concret.

// En résumé, cette interface Adapter<T> est destinée à être implémentée par d'autres classes ou objets.
//  Elle propose une méthode adapt qui devrait convertir un objet de type any en un objet de type T.
//   L'utilisation de génériques (T dans ce cas) permet de rendre cette interface réutilisable pour différentes structures de données sans spécifier le type exact au moment de la définition de l'interface.