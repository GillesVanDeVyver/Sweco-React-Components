(() => ({
    name: 'InputDate',
    type: 'CONTENT_COMPONENT',
    allowedTypes: [],
    orientation: 'HORIZONTAL',
    jsx: (() => {

        const {
            timeType,
            state,
            size,
            nameAttribute,
            customModelAttribute: customModelAttributeObj, } = options;

        const {
            useText,
            getCustomModelAttribute
        } = B;



        const {
            id: customModelAttributeId,
            label = [],
            value: defaultValue = [],
        } = customModelAttributeObj;
        const customModelAttribute = getCustomModelAttribute(customModelAttributeId);

        const nameAttributeValue = useText(nameAttribute);
        const { name: customModelAttributeName, validations: { required } = {} } = customModelAttribute || {};

        const labelText = useText(label);


        const classNames = [
            "form-control",
            `form-control-${size}`
        ].join(" ");
        const stateAttribute = { [state]: state };
        const inputElement = (
            <div className="row form-group">
                <label htmlFor={nameAttributeValue || customModelAttributeName} className="col-lg-4 col-form-label">{labelText}</label>
                <div className="col-lg-8">
                    <input name={nameAttributeValue || customModelAttributeName} className={classNames} type={timeType} {...stateAttribute} />
                </div>
            </div>
        )
        return inputElement;
    }
    )(),
    styles: () => ({}),
}))();
