export interface Header {
  header: string;
  subheader: string;
  label: string;
}

export const HEADER_DATA: Header[] = [
  {header:'TYPE', subheader: '', label: '1. Program'},
  {header:'TYPE', subheader: '', label: '2. Inspection'},
  {header:'TYPE', subheader: '', label: '3. Bit Program'},
  {header:'DUTY HOURS', subheader:'INSPECTION', label: '4. Carrier'},
  {header:'DUTY HOURS', subheader:'INSPECTION', label: '5. Maint. Program'},
  {header:'DUTY HOURS', subheader:'INSPECTION', label: '6. Driver records'},
  {header:'DUTY HOURS', subheader:'INSPECTION', label: '7. Vehicle insp.'},
  {header:'DUTY HOURS', subheader:'INSPECTION', label: '8. Cont./tank insp.'},
  {header:'DUTY HOURS', subheader:'INSPECTION', label: '9. Haz. Mat. Insp.'},
  {header:'DUTY HOURS', subheader:'INSPECTION', label: '10. Scheduling'},
  {header:'DUTY HOURS', subheader:'INSPECTION', label: '11. Travel'},
  {header:'DUTY HOURS', subheader:'OTHER ACTIVITIES', label: '12. Pre-inspection'},
  {header:'DUTY HOURS', subheader:'OTHER ACTIVITIES', label: '13. Post-inspection'},
  {header:'DUTY HOURS', subheader:'OTHER ACTIVITIES', label: '14. CII/AII/MAIT'},
  {header:'DUTY HOURS', subheader:'OTHER ACTIVITIES', label: '15. Admin. Action'},
  {header:'DUTY HOURS', subheader:'OTHER ACTIVITIES', label: '16. Training'},
  {header:'DUTY HOURS', subheader:'OTHER ACTIVITIES', label: '17. CHP vehicle maint.'},
  {header:'DUTY HOURS', subheader:'OTHER ACTIVITIES', label: '18. Other'},
  {header:'DUTY HOURS', subheader:'OTHER ACTIVITIES', label: 'Other/coments'},
  {header:'TALLY HOURS', subheader:'', label: '19. Total hours'},

  {header:'RATE', subheader: '', label: '20. Terminal rating'},
  {header:'RATE', subheader: '', label: '21. Carrier rating'},
  {header:'RATE', subheader: '', label: '22. Up/downgrade'},
  {header:'RATE', subheader: '', label: '23. CHP 345 Issued'},

  {header:'INSPECTION ITEMS', subheader:'', label: '24. Maint. records'},
  {header:'INSPECTION ITEMS', subheader:'', label: '25. Driver records'},
  {header:'INSPECTION ITEMS', subheader:'', label: '26. Vehicles'},
  {header:'INSPECTION ITEMS', subheader:'', label: '27. Vehicle reinspection'},
  {header:'INSPECTION ITEMS', subheader:'', label: '28. F/L cargo tank'},
  {header:'INSPECTION ITEMS', subheader:'', label: '29. H/W Container'},
  {header:'INSPECTION ITEMS', subheader:'', label: '30. Units certified'},
  {header:'INSPECTION ITEMS', subheader:'', label: '31. CVSA'},
  {header:'INSPECTION ITEMS', subheader:'', label: '32. Vehicle OOS'},
  {header:'VIOLATIONS', subheader:'ADMIN', label: '33. Maint. prog/rec'},
  {header:'VIOLATIONS', subheader:'ADMIN', label: '34. Driver record'},
  {header:'VIOLATIONS', subheader:'ADMIN', label: '35. Hours of service'},
  {header:'VIOLATIONS', subheader:'ADMIN', label: '36. Maz. materials'},
  {header:'VIOLATIONS', subheader:'ADMIN', label: '37. CSAT'},
  {header:'VIOLATIONS', subheader:'VEHICLE', label: '38. Brakes'},
  {header:'VIOLATIONS', subheader:'VEHICLE', label: '39. Lamps-signals'},

  {header:'VIOLATIONS', subheader:'VEHICLE', label: '40. Connecting dev'},
  {header:'VIOLATIONS', subheader:'VEHICLE', label: '41. Steering & susp.'},
  {header:'VIOLATIONS', subheader:'VEHICLE', label: '42. Tires & wheels'},
  {header:'VIOLATIONS', subheader:'VEHICLE', label: '43. Equip./maint.'},
  {header:'VIOLATIONS', subheader:'VEHICLE', label: '44. Cont./tank'},

  {header:'SPEC', subheader:'', label: '45. MCSTO'},
  {header:'SPEC', subheader:'', label: '46. # of on-hwy insp.'},
  {header:'SPEC', subheader:'', label: '47. '},
    
];