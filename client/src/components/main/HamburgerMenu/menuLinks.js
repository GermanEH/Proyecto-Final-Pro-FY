export function getMenuLinks(userType) {
  const home = userType === 'pacient' ? 'HomePacient' : 'HomeProfessional'
  return ([
    { label: 'Inicio', icon: 'home', screen: home },
    { label: 'Notificaciones', icon: 'bell', screen: 'Notifications' },
    { label: 'Preguntas frecuentes', icon: 'question-circle', screen: 'FrequentQuestions' },
    { label: 'Ajustes', icon: 'cog', screen: 'Settings' },
  ])
}