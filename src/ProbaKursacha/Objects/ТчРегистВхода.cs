﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.ProbaKursacha
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Тч регист входа.
    /// </summary>
    // *** Start programmer edit section *** (ТчРегистВхода CustomAttributes)

    // *** End programmer edit section *** (ТчРегистВхода CustomAttributes)
    [AutoAltered()]
    [Caption("Тч регист входа")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТчРегистВходаE", new string[] {
            "Cотрудник as \'Cотрудник\'",
            "Cотрудник.Фамилия as \'Фамилия\'",
            "Должность as \'Должность\'",
            "Карты as \'Карты\'",
            "Карты.КодКарты as \'Код карты\'",
            "Должность.Наименование as \'Наименование\'",
            "Гость as \'Гость\'",
            "Гость.Фамилия as \'Фамилия\'"}, Hidden=new string[] {
            "Cотрудник.Фамилия",
            "Карты.КодКарты",
            "Должность.Наименование",
            "Гость.Фамилия"})]
    [MasterViewDefineAttribute("ТчРегистВходаE", "Cотрудник", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фамилия")]
    [MasterViewDefineAttribute("ТчРегистВходаE", "Должность", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [MasterViewDefineAttribute("ТчРегистВходаE", "Карты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "КодКарты")]
    [MasterViewDefineAttribute("ТчРегистВходаE", "Гость", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фамилия")]
    public class ТчРегистВхода : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.ProbaKursacha.Cотрудник fCотрудник;
        
        private IIS.ProbaKursacha.Карты fКарты;
        
        private IIS.ProbaKursacha.Должность fДолжность;
        
        private IIS.ProbaKursacha.Гость fГость;
        
        private IIS.ProbaKursacha.ФормаРегисВх fФормаРегисВх;
        
        // *** Start programmer edit section *** (ТчРегистВхода CustomMembers)

        // *** End programmer edit section *** (ТчРегистВхода CustomMembers)

        
        /// <summary>
        /// Тч регист входа.
        /// </summary>
        // *** Start programmer edit section *** (ТчРегистВхода.Cотрудник CustomAttributes)

        // *** End programmer edit section *** (ТчРегистВхода.Cотрудник CustomAttributes)
        [PropertyStorage(new string[] {
                "Cотрудник"})]
        [NotNull()]
        public virtual IIS.ProbaKursacha.Cотрудник Cотрудник
        {
            get
            {
                // *** Start programmer edit section *** (ТчРегистВхода.Cотрудник Get start)

                // *** End programmer edit section *** (ТчРегистВхода.Cотрудник Get start)
                IIS.ProbaKursacha.Cотрудник result = this.fCотрудник;
                // *** Start programmer edit section *** (ТчРегистВхода.Cотрудник Get end)

                // *** End programmer edit section *** (ТчРегистВхода.Cотрудник Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТчРегистВхода.Cотрудник Set start)

                // *** End programmer edit section *** (ТчРегистВхода.Cотрудник Set start)
                this.fCотрудник = value;
                // *** Start programmer edit section *** (ТчРегистВхода.Cотрудник Set end)

                // *** End programmer edit section *** (ТчРегистВхода.Cотрудник Set end)
            }
        }
        
        /// <summary>
        /// Тч регист входа.
        /// </summary>
        // *** Start programmer edit section *** (ТчРегистВхода.Гость CustomAttributes)

        // *** End programmer edit section *** (ТчРегистВхода.Гость CustomAttributes)
        [PropertyStorage(new string[] {
                "Гость"})]
        [NotNull()]
        public virtual IIS.ProbaKursacha.Гость Гость
        {
            get
            {
                // *** Start programmer edit section *** (ТчРегистВхода.Гость Get start)

                // *** End programmer edit section *** (ТчРегистВхода.Гость Get start)
                IIS.ProbaKursacha.Гость result = this.fГость;
                // *** Start programmer edit section *** (ТчРегистВхода.Гость Get end)

                // *** End programmer edit section *** (ТчРегистВхода.Гость Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТчРегистВхода.Гость Set start)

                // *** End programmer edit section *** (ТчРегистВхода.Гость Set start)
                this.fГость = value;
                // *** Start programmer edit section *** (ТчРегистВхода.Гость Set end)

                // *** End programmer edit section *** (ТчРегистВхода.Гость Set end)
            }
        }
        
        /// <summary>
        /// Тч регист входа.
        /// </summary>
        // *** Start programmer edit section *** (ТчРегистВхода.Должность CustomAttributes)

        // *** End programmer edit section *** (ТчРегистВхода.Должность CustomAttributes)
        [PropertyStorage(new string[] {
                "Должность"})]
        [NotNull()]
        public virtual IIS.ProbaKursacha.Должность Должность
        {
            get
            {
                // *** Start programmer edit section *** (ТчРегистВхода.Должность Get start)

                // *** End programmer edit section *** (ТчРегистВхода.Должность Get start)
                IIS.ProbaKursacha.Должность result = this.fДолжность;
                // *** Start programmer edit section *** (ТчРегистВхода.Должность Get end)

                // *** End programmer edit section *** (ТчРегистВхода.Должность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТчРегистВхода.Должность Set start)

                // *** End programmer edit section *** (ТчРегистВхода.Должность Set start)
                this.fДолжность = value;
                // *** Start programmer edit section *** (ТчРегистВхода.Должность Set end)

                // *** End programmer edit section *** (ТчРегистВхода.Должность Set end)
            }
        }
        
        /// <summary>
        /// Тч регист входа.
        /// </summary>
        // *** Start programmer edit section *** (ТчРегистВхода.Карты CustomAttributes)

        // *** End programmer edit section *** (ТчРегистВхода.Карты CustomAttributes)
        [PropertyStorage(new string[] {
                "Карты"})]
        [NotNull()]
        public virtual IIS.ProbaKursacha.Карты Карты
        {
            get
            {
                // *** Start programmer edit section *** (ТчРегистВхода.Карты Get start)

                // *** End programmer edit section *** (ТчРегистВхода.Карты Get start)
                IIS.ProbaKursacha.Карты result = this.fКарты;
                // *** Start programmer edit section *** (ТчРегистВхода.Карты Get end)

                // *** End programmer edit section *** (ТчРегистВхода.Карты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТчРегистВхода.Карты Set start)

                // *** End programmer edit section *** (ТчРегистВхода.Карты Set start)
                this.fКарты = value;
                // *** Start programmer edit section *** (ТчРегистВхода.Карты Set end)

                // *** End programmer edit section *** (ТчРегистВхода.Карты Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.ProbaKursacha.ФормаРегисВх.
        /// </summary>
        // *** Start programmer edit section *** (ТчРегистВхода.ФормаРегисВх CustomAttributes)

        // *** End programmer edit section *** (ТчРегистВхода.ФормаРегисВх CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ФормаРегисВх"})]
        public virtual IIS.ProbaKursacha.ФормаРегисВх ФормаРегисВх
        {
            get
            {
                // *** Start programmer edit section *** (ТчРегистВхода.ФормаРегисВх Get start)

                // *** End programmer edit section *** (ТчРегистВхода.ФормаРегисВх Get start)
                IIS.ProbaKursacha.ФормаРегисВх result = this.fФормаРегисВх;
                // *** Start programmer edit section *** (ТчРегистВхода.ФормаРегисВх Get end)

                // *** End programmer edit section *** (ТчРегистВхода.ФормаРегисВх Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТчРегистВхода.ФормаРегисВх Set start)

                // *** End programmer edit section *** (ТчРегистВхода.ФормаРегисВх Set start)
                this.fФормаРегисВх = value;
                // *** Start programmer edit section *** (ТчРегистВхода.ФормаРегисВх Set end)

                // *** End programmer edit section *** (ТчРегистВхода.ФормаРегисВх Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТчРегистВходаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТчРегистВходаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТчРегистВходаE", typeof(IIS.ProbaKursacha.ТчРегистВхода));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ТчРегистВхода.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТчРегистВхода CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТчРегистВхода CustomAttributes)
    public class DetailArrayOfТчРегистВхода : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.ProbaKursacha.DetailArrayOfТчРегистВхода members)

        // *** End programmer edit section *** (IIS.ProbaKursacha.DetailArrayOfТчРегистВхода members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ТчРегистВхода by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ТчРегистВхода.
        /// </summary>
        public DetailArrayOfТчРегистВхода(IIS.ProbaKursacha.ФормаРегисВх fФормаРегисВх) : 
                base(typeof(ТчРегистВхода), ((ICSSoft.STORMNET.DataObject)(fФормаРегисВх)))
        {
        }
        
        public IIS.ProbaKursacha.ТчРегистВхода this[int index]
        {
            get
            {
                return ((IIS.ProbaKursacha.ТчРегистВхода)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.ProbaKursacha.ТчРегистВхода dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
