// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import experience from './experience'
import skill from './skill'
import pageInfo from './pageInfo'
import social from './social'
import project from './project'

export default createSchema({
  // name of schema
  name: 'default',
  // concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([skill, pageInfo, experience, social, project])
})
