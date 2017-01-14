<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.0.0" xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd">
<NamedLayer>
<Name>Attribute-based line</Name>
<UserStyle>
<Title>SLD Cook Book: Attribute-based line</Title>
<FeatureTypeStyle>
<Rule>
<Name>arson</Name>
<ogc:Filter>
<ogc:PropertyIsEqualTo>
<ogc:PropertyName>type of cr</ogc:PropertyName>
<ogc:Literal>Arson</ogc:Literal>
</ogc:PropertyIsEqualTo>
</ogc:Filter>
<PointSymbolizer>
<Graphic>
<Mark>
<WellKnownName>circle</WellKnownName>
<Fill>
<CssParameter name="fill">#FF0000</CssParameter>
</Fill>
</Mark>


</Graphic>
</PointSymbolizer>
</Rule>
</FeatureTypeStyle>
<FeatureTypeStyle>
<Rule>
<Name>bankrobbery</Name>
<ogc:Filter>
<ogc:PropertyIsEqualTo>
<ogc:PropertyName>type of cr</ogc:PropertyName>
<ogc:Literal>Bank Robbery</ogc:Literal>
</ogc:PropertyIsEqualTo>
</ogc:Filter>
<PointSymbolizer>
<Graphic>
<Mark>
<WellKnownName>circle</WellKnownName>
<Fill>
<CssParameter name="fill">#006633</CssParameter>
</Fill>
</Mark>

</Graphic>
</PointSymbolizer>
</Rule>
</FeatureTypeStyle>
<FeatureTypeStyle>
<Rule>
<Name>carjacking</Name>
<ogc:Filter>
<ogc:PropertyIsEqualTo>
<ogc:PropertyName>type of cr</ogc:PropertyName>
<ogc:Literal>Car Jacking</ogc:Literal>
</ogc:PropertyIsEqualTo>
</ogc:Filter>
<PointSymbolizer>
<Graphic>
<Mark>
<WellKnownName>circle</WellKnownName>
<Fill>
<CssParameter name="fill">#0000FF</CssParameter>
</Fill>
</Mark>

</Graphic>
</PointSymbolizer>
</Rule>
</FeatureTypeStyle>
<FeatureTypeStyle>
<Rule>
<Name>conman</Name>
<ogc:Filter>
<ogc:PropertyIsEqualTo>
<ogc:PropertyName>type of cr</ogc:PropertyName>
<ogc:Literal>Con man</ogc:Literal>
</ogc:PropertyIsEqualTo>
</ogc:Filter>
<PointSymbolizer>
<Graphic>
<Mark>
<WellKnownName>circle</WellKnownName>
<Fill>
<CssParameter name="fill">#00FFFF</CssParameter>
</Fill>
</Mark>

</Graphic>
</PointSymbolizer>
</Rule>
</FeatureTypeStyle>
<FeatureTypeStyle>
<Rule>
<Name>illegaldrugs</Name>
<ogc:Filter>
<ogc:PropertyIsEqualTo>
<ogc:PropertyName>type of cr</ogc:PropertyName>
<ogc:Literal>Illegal Drugs</ogc:Literal>
</ogc:PropertyIsEqualTo>
</ogc:Filter>
<PointSymbolizer>
<Graphic>
<Mark>
<WellKnownName>circle</WellKnownName>
<Fill>
<CssParameter name="fill">#FF00FF</CssParameter>
</Fill>
</Mark>

</Graphic>
</PointSymbolizer>
</Rule>
</FeatureTypeStyle>
<FeatureTypeStyle>
<Rule>
<Name>pickpocket</Name>
<ogc:Filter>
<ogc:PropertyIsEqualTo>
<ogc:PropertyName>type of cr</ogc:PropertyName>
<ogc:Literal>Pick Pocket</ogc:Literal>
</ogc:PropertyIsEqualTo>
</ogc:Filter>
<PointSymbolizer>
<Graphic>
<Mark>
<WellKnownName>circle</WellKnownName>
<Fill>
<CssParameter name="fill">#996600</CssParameter>
</Fill>
</Mark>

</Graphic>
</PointSymbolizer>
</Rule>
</FeatureTypeStyle>
<FeatureTypeStyle>
<Rule>
<Name>sexualassault</Name>
<ogc:Filter>
<ogc:PropertyIsEqualTo>
<ogc:PropertyName>type of cr</ogc:PropertyName>
<ogc:Literal>Sexual Assault</ogc:Literal>
</ogc:PropertyIsEqualTo>
</ogc:Filter>
<PointSymbolizer>
<Graphic>
<Mark>
<WellKnownName>circle</WellKnownName>
<Fill>
<CssParameter name="fill">#FFFF00</CssParameter>
</Fill>
</Mark>

</Graphic>
</PointSymbolizer>
</Rule>
</FeatureTypeStyle>
</UserStyle>
</NamedLayer>
</StyledLayerDescriptor>