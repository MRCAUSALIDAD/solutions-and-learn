export const treeData = [
    { label: 'README.md', content: 'Este es el README del proyecto.' },
    { label: 'math', children: [
        { label: 'prueba1.tex', content: '\\documentclass{article}\n\\begin{document}\nHola, mundo en LaTeX.\n\\end{document}' }
    ]},
    { label: 'physics', children: [
        { label: 'prueba1.tex', content: '% Física básica\nF=ma'
    }]},
    { label: 'programming', children: [
        { label: 'prueba1.cpp', content: '#include <iostream>\nint main() {\n    std::cout << "Hola mundo";\n    return 0;\n}' }
    ]}
];
